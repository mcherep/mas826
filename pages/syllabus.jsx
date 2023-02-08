import { Title, Text, Group, Box, Anchor, Divider, Badge } from "@mantine/core";

const Syllabus = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Syllabus
            </Title>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 8</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Introduction</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 15</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Creativity: Big-C and little-c</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 22</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Music as a Testbed for Creativity</Title>
                    <Badge color="red" variant="filled">Project 1</Badge>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 1</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>AI Tools for Creativity</Title>
                    <Anchor href="https://manaswimishra.com/" target="blank_" size="md">Manaswi Mishra</Anchor>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 9</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Title</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 15</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Creativity Tools for Enhanced Personal and Interpersonal Awareness</Title>
                    (<Anchor href="https://mcherep.github.io/" target="blank_" size="md">Manuel Cherep</Anchor> and <Anchor href="http://jessiemindel.com/" target="blank_" size="md">Jessie Mindel</Anchor>)
        <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 22</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Project 2 Presentation</Title>
                    <Badge color="red" variant="filled">Project 2</Badge>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 29</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Spring Break</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 5</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Discussion with ML Faculty</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 12</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Guest Lecture: TBD</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 19</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Guest Lecture: TBD</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 26</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Guest Lecture: TBD</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 3</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Project 3 Discussion</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 10</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Project 3 Discussion</Title>
                    <Text>Placeholder</Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 17</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Project 3 Presentation</Title>
                    <Badge color="red" variant="filled">Project 3</Badge>
                </Box>
            </Group>
        </>
    );
}

export default Syllabus;
