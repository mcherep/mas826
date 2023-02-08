import { Title, Group, Text, Divider } from "@mantine/core";

const Assignments = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Assignments
            </Title>

            <Group>
                <Title order={2} size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Assignment 1
                </Title>
                <Title order={2} size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (for February 15th)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                CREATIVITY: BIG-C AND LITTLE-C
            </Title>
            <Text p={"md"} pt={0} pb={"xl"}>
                Description
            </Text>

            <Divider/>

            <Group>
                <Title order={2} size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Assignment 2
                </Title>
                <Title order={2} size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (for February 22nd)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                MUSIC AS A TESTBED FOR CREATIVITY
            </Title>
            <Text p={"md"} pt={0} pb={"xl"}>
                Description
            </Text>
        </>
    );
}

export default Assignments;
