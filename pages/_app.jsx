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
import config from "../next.config";

export default function App(props) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState(props.colorScheme);
    const [doRender, setDoRender] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => setDoRender(true), []);

    const [width, setWidth] = useState();
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <>
            <Head>
                <title>MAS.826 Cultivating Creativity</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link rel="shortcut icon" href="/favicon.svg" />
                <base href={(config.basePath ?? "") + "/"}/>
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
                     navbar={<Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}><Menu/></Navbar>}
                     header={isMobile ?
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
