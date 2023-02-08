import { Title, Group, Anchor, Divider, Image, Box, Text } from "@mantine/core";

const Staff = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Staff
            </Title>
            <Title order={2} size={30} p={"md"} pt={"xs"} pb={0}>
                Professor
            </Title>
            <Group>
                <Image
                    width={150}
                    height={150}
                    p={"xl"}
                    radius="md"
                    src="/tod.jpeg"
                    alt="Tod Profile"
                />
                <Box p={"md"}>
                    <Anchor href="https://www.media.mit.edu/people/tod/overview/" target="blank_" size="xl">Tod Machover</Anchor>
                    <Text>tod@media.mit.edu</Text>
                    <Text>Muriel R. Cooper Professor of Music and Media, MIT Media Lab</Text>
                    <Text>Director, Opera of the Future</Text>
                </Box>
            </Group>
            <Title order={2} size={30} p={"md"} pt={"xs"} pb={0}>
                Teaching Assistants
            </Title>
            <Group>
                <Image
                    width={150}
                    height={150}
                    p={"xl"}
                    radius="md"
                    src="/manuel.jpeg"
                    alt="Manuel Profile"
                />
                <Box p={"md"}>
                    <Anchor href="https://mcherep.github.io/" target="blank_" size="xl">Manuel Cherep</Anchor>
                    <Text>mcherep@media.mit.edu</Text>
                    <Text>Master&apos;s student, Opera of the Future</Text>
                </Box>
            </Group>
            <Group>
                <Image
                    width={150}
                    height={150}
                    p={"xl"}
                    radius="md"
                    src="/jessie.jpeg"
                    alt="Jessie Profile"
                />
                <Box p={"md"}>
                    <Anchor href="http://jessiemindel.com/" target="blank_" size="xl">Jessie Mindel</Anchor>
                    <Text>jmindel@media.mit.edu</Text>
                    <Text>Master&apos;s student, Opera of the Future</Text>
                </Box>
            </Group>
            <Group>
                <Image
                    width={150}
                    height={150}
                    p={"xl"}
                    radius="md"
                    src="/manaswi.jpeg"
                    alt="Manaswi Profile"
                />
                <Box p={"md"}>
                    <Anchor href="https://manaswimishra.com/" target="blank_" size="xl">Manaswi Mishra</Anchor>
                    <Text>manaswim@media.mit.edu</Text>
                    <Text>PhD student, Opera of the Future</Text>
                </Box>
            </Group>
            <Title order={2} size={30} p={"md"} pt={"xs"} pb={0}>
                Course Administrator
            </Title>
            <Group>
                <Image
                    width={150}
                    height={150}
                    p={"xl"}
                    radius="md"
                    src="/clemence.jpeg"
                    alt="Clemence Profile"
                />
                <Box p={"md"}>
                    <Anchor href="https://www.media.mit.edu/people/ctaillan/overview/" target="blank_" size="xl">Clémence Taillandier</Anchor>
                    <Text>ctaillan@media.mit.edu</Text>
                    <Text>Senior Administrative Assistant, Opera of the Future</Text>
                </Box>
            </Group>
        </>
    );
}

export default Staff;
