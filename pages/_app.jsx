import { useState, useEffect } from "react";
import NextApp from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import { MantineProvider,
         Container,
         Grid,
         Divider,
         AppShell,
         Navbar,
         Header,
         MediaQuery,
         Burger, } from "@mantine/core";
import myTheme from "../data/theme.yaml";
import Menu from "../components/Menu";

export default function App(props) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState(props.colorScheme);
    const [doRender, setDoRender] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => setDoRender(true), []);

    const useWindowDimensions = () => {
        const hasWindow = typeof window !== "undefined"

        function getWindowDimensions() {
            const width = hasWindow ? window.innerWidth : null
            const height = hasWindow ? window.innerHeight : null
            return {
                width,
                height,
            }
        }

        const [windowDimensions, setWindowDimensions] = useState(
            getWindowDimensions()
        )

        useEffect(() => {
            if (hasWindow) {
                function handleResize() {
                    setWindowDimensions(getWindowDimensions())
                }

                window.addEventListener("resize", handleResize)
                return () => window.removeEventListener("resize", handleResize)
            }
        }, [hasWindow])

        return windowDimensions
    }

    const { height, width } = useWindowDimensions()
    const breakpoint = 768

    return (
        <>
            <Head>
                <title>MAS.826 Cultivating Creativity</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.svg" />
            </Head>


            <MantineProvider
                theme={{
                    colorScheme: colorScheme,
                    defaultGradient: myTheme[colorScheme].defaultGradient,
                    primaryColor: myTheme[colorScheme].defaultColor,
                    fontFamily: myTheme.fontFamily,
                    headings: {
                        fontFamily: myTheme.fontFamily
                    },
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                {doRender &&
                 <AppShell
                     padding="md"
                     navbar={<Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 300 }}><Menu/></Navbar>}
                     header={width <= breakpoint ?
                             <Header height={{ base: 50, md: 70 }} p="md" style={{}}>
                                 <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                     <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                         <Burger
                                             opened={opened}
                                             onClick={() => setOpened((o) => !o)}
                                             size="sm"
                                             mr="xl"
                                         />
                                     </MediaQuery>
                                 </div>
                             </Header> :
                            null}
                 >
                     <MantineProvider
                         theme={{
                             colorScheme: "light",
                             defaultGradient: myTheme.dark.defaultGradient,
                             primaryColor: myTheme.light.defaultColor,
                             components: {
                                 Anchor: {
                                     defaultProps: {
                                         variant: "gradient"
                                     }
                                 }
                             }
                         }}
                         inherit
                         withGlobalStyles
                         withNormalizeCSS
                     >
                         <Component {...pageProps}/>
                     </MantineProvider>
                 </AppShell>}
            </MantineProvider>
        </>
    );
}

App.getInitialProps = async (appContext) => {
    const appProps = await NextApp.getInitialProps(appContext);
    return {
        ...appProps,
        colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
    };
};
