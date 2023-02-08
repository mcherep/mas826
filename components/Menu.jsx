import { useMantineTheme, Anchor, Title, Stack } from '@mantine/core';

const Menu = () => {
    const theme = useMantineTheme();
    return (
        <>
            <Stack p={"md"} pt={"md"} pb={0}>
                <Anchor href="/mas826" style={{ textDecoration: "none" }}><Title>Cultivating Creativity</Title></Anchor>
                <br/>
                <Anchor href="/mas826/syllabus" style={{ textDecoration: "none" }}>Syllabus</Anchor>
                <Anchor href="/mas826/assignments" style={{ textDecoration: "none" }}>Assignments</Anchor>
                <Anchor href="/mas826/projects" style={{ textDecoration: "none" }}>Projects</Anchor>
                <Anchor href="/mas826/staff" style={{ textDecoration: "none" }}>Staff</Anchor>
            </Stack>
        </>
    );
};

export default Menu;
