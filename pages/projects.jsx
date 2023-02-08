import { Title, Group, Text, Divider } from "@mantine/core";

const Projects = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Projects
            </Title>

            <Group>
                <Title size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Project 1
                </Title>
                <Title size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due on February 22nd)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                A MINUTE OF CREATIVITY
            </Title>
            <Text p={"md"} pt={0} pb={"xl"}>
                Description
            </Text>

            <Divider/>

            <Group>
                <Title size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Project 2
                </Title>
                <Title size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due on March 22nd)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                SUBTITLE
            </Title>
            <Text p={"md"} pt={0} pb={"xl"}>
                Description
            </Text>

            <Divider/>

            <Group>
                <Title size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Project 3
                </Title>
                <Title size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due on May 17th)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                SUBTITLE
            </Title>
            <Text p={"md"} pt={0} pb={"xl"}>
                Description
            </Text>
        </>
    );
}

export default Projects;
