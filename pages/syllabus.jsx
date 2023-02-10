import { Title, Text, Group, Box, Anchor, Divider, Badge } from "@mantine/core";

const Syllabus = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Syllabus
            </Title>
            <Text size={14} p={"md"} pt={"xs"} pb={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                MAS.826J
                <br/>
                Wednesdays, 2-4 PM
                <br/>
                MIT Media Lab, E14-493
                <br/>
                Prof. Tod Machover (tod@media.mit.edu)
            </Text>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 8</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}>Introduction</Title>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 15</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Group>
                        <Title order={3}>Creativity: Big-C and little-c</Title>
                        <Badge color="red" variant="filled">Project 1</Badge>
                    </Group>
                    <Text p={"xl"} pt={"xs"}>
                        <u>Discussion</u> of Schoenberg/Cage, Oliveros, Minsky and Papert
                        <br/>
                        <u>Share</u> 1st project (introduce yourself thru personal creativity)
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Feb 22</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}>Music as a Testbed for Creativity</Title>
                    <Text p={"xl"} pt={"xs"}>
                        Brain Opera, City Symphonies, Hyperscore, etc.
                        <br/>
                        Creative Sound experience in class
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 1</strong> (Tod/NYC)</Text>
                </Box>
                <Box p={"md"}>
                    <Group>
                        <Title order={3}>AI Tools for Creativity</Title>
                        <Text>
                            ( <Anchor href="https://manaswimishra.com/" target="blank_" size="md">Manaswi Mishra</Anchor> )
                        </Text>
                    </Group>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 3 *</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}>Screening of <i>Sisters With Transistors</i> + Discussion</Title>
                    <Text p={"xl"} pt={"xs"}>
                        MIT E15 basement, Bartos Theater, 5-8 pm
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 7 *</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}><Anchor href="https://www.media.mit.edu/events/overstory-overture-premiere/" target="blank_">Overstory Overture</Anchor> premiere in NYC</Title>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 9 *</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}>Enhancing Creativity for Others</Title>
                    <Text p={"xl"} pt={"xs"}>
                        2nd project DRAFT (enhancing creativity...with AI)
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 15</strong> (Tod/Korea)</Text>
                </Box>
                <Box p={"md"}>
                    <Group>
                        <Title order={3}>Tools for Enhanced Awareness</Title>
                        <Text>
                            ( <Anchor href="https://mcherep.github.io/" target="blank_" size="md" pr={0}>Manuel Cherep</Anchor> / <Anchor href="http://jessiemindel.com/" target="blank_" size="md" pl={0}>Jessie Mindel</Anchor> )
                        </Text>
                    </Group>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 22</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Group>
                        <Title order={3}>Presentation+Discussion</Title>
                        <Badge color="red" variant="filled">Project 2</Badge>
                    </Group>
                    <Text p={"xl"} pt={"xs"}>
                        (Enhancing Creativity for Others), ready for Spring Meeting
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Mar 29</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}><i>Spring Break</i></Title>
                    <Text p={"xl"} pt={"xs"}>
                        (Tod could meet informally with anyone here)
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 3-4</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}><i>ML Spring Meeting, Cultivating Creativity</i> “deep dive”</Title>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 5</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Group>
                        <Title order={3}>Cultivating <u>More</u> Creativity</Title>
                        <Text>
                            ( <Anchor href="https://www.media.mit.edu/people/mres/overview/" target="blank_" size="md">Mitchel Resnick</Anchor> & others )
                        </Text>
                    </Group>
                    <Text p={"xl"} pt={"xs"}>
                        Final Project – 1st discussion
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 12</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Group>
                        <Title order={3}>Studying and Developing Creativity in/through the Arts</Title>
                        <Text>
                            ( <Anchor href="https://www.verywellmind.com/howard-gardner-biography-2795511" target="blank_" size="md" pr={0}>Howard Gardner</Anchor> / <Anchor href="https://www.gifted.gr/documents/useful-documents/Gifted_children.pdf" target="blank_" size="md" pl={0}>Ellen Winner</Anchor> )
                        </Text>
                    </Group>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 19</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Group>
                        <Title order={3}>Lifelong Creativity</Title>
                        <Text>
                            ( <Anchor href="http://sherryturkle.mit.edu/" target="blank_" size="md">Sherry Turkle</Anchor> )
                        </Text>
                    </Group>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>Apr 26</strong></Text>
                </Box>
                <Box p={"md"}>
                    <Title order={3}><Anchor href="https://www.clairechase.net/" target="blank_">Claire Chase</Anchor>, <Anchor href="https://alsoanoperasinger.org/" target="blank_">Davóne Tines</Anchor> or <Anchor href="https://mta.mit.edu/person/eran-egozy" target="blank_">Eran Egozy</Anchor></Title>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 3</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}>Final Project (Inspiring Others)</Title>
                    <Text p={"xl"} pt={"xs"}>
                        Share/Discussion
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 10</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Title order={3}>Final Project (Inspiring Others)</Title>
                    <Text p={"xl"} pt={"xs"}>
                        Share/Discussion
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Group>
                <Box style={{width: 90}}>
                    <Text p={"md"} color="dimmed"><strong>May 17</strong></Text>
                </Box>
                <Box p={"md"} pb={0}>
                    <Group>
                        <Title order={3}>Final Class</Title>
                        <Badge color="red" variant="filled">Final Project</Badge>
                    </Group>
                    <Text p={"xl"} pt={"xs"}>
                        Presentations/Installations/Performances
                    </Text>
                </Box>
            </Group>

            <Divider/>

            <Text size={14} p={"md"} pt={"xs"} pb={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                TA’s: Manuel Cherep, Jessie Mindel, Manaswi Mishra
                <br/>
                Clémence Taillandier (ctaillan@media.mit.edu)
            </Text>
        </>
    );
}

export default Syllabus;
