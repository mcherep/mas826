import { useMantineTheme, Anchor, Title, Stack } from '@mantine/core';

const Menu = () => {
    const theme = useMantineTheme();
    return (
        <>
            <Stack p={"md"} pt={"md"} pb={0}>
                <Anchor href="/" style={{ textDecoration: "none" }}><Title>Cultivating Creativity</Title></Anchor>
                <br/>
                <Anchor href="/syllabus" style={{ textDecoration: "none" }}>Syllabus</Anchor>
                <Anchor href="/assignments" style={{ textDecoration: "none" }}>Assignments</Anchor>
                <Anchor href="/projects" style={{ textDecoration: "none" }}>Projects</Anchor>
                <Anchor href="/staff" style={{ textDecoration: "none" }}>Staff</Anchor>
            </Stack>
        </>
    );
};

export default Menu;
