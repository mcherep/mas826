import { Title, Image, Text, Anchor } from "@mantine/core";

const HomePage = () => {
    return (
        <>
            <Title order={1} size={40} p={"md"} pt={"xs"} pb={0}>
                Cultivating Creativity
            </Title>
            <Title order={2} size={14} p={"md"} pt={"xs"} pb={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                A SPECIAL EDITION OF MAS.826 PROJECTS IN MEDIA AND MUSIC
            </Title>
            <Title order={2} size={14} p={"md"} pt={0} style={{fontVariant: "small-caps"}}>
                PROF. TOD MACHOVER, SPRING 2023, W 2-4 PM, E14-493
            </Title>
            <Image p={"md"} pt={"xs"} pb={0} src="mas826/hyperrothko.png" alt="Header Image"></Image>
            <br/>
            <Text p={"md"} pt={"xs"} pb={0}>
                The accelerating crises, disruptions, and disconnections in today’s society—nationally and globally—highlight the urgency for all of us to become more inventive, empathetic, and creative in everything we do. The ability to think and act creatively is the most powerful antidote to depression, disillusionment, distancing, and destruction; research shows that participation in creative arts learning, problem-solving, and empathy result in wellbeing and wholeness. How might fostering lifelong creativity help society envision, explore, and implement a more joyful, artful, meaningful, and equitable future? What tools might we build and what experiences could we develop to enhance, inspire and unleash creativity in everyone, in super-special circumstances and in the everyday?
            </Text>
            <br/>
            <Text p={"md"} pt={"xs"} pb={0}>
                This experimental course - using <strong>music and sound</strong> as a primary experimental testbed - will explore these issues and more. We will study the cognitive and neuroscientific bases of creativity; investigate pedagogical approaches for developing creativity in children; employ and critique tools for expanding creativity in experts and amateurs; analyze the techniques - and discuss the opportunities and challenges - of the latest AI tools for artistic generation and manipulation (with an emphasis on music and multisensory systems); consider creativity as an especially powerful communication form capable of increasing understanding of oneself and connection to others; and experience the process and product of some of the most exciting artists working today.
            </Text>
            <br/>
            <Text p={"md"} pt={"xs"} pb={0}>
                Although <strong>Cultivating Creativity</strong> will teach techniques (music/audio, AI, fab/construction, etc.), involve substantial readings, and include meetings/discussions with prominent experts and practitioners from a variety of relevant fields as well as study of core projects from the Media Lab’s <Anchor href="https://opera2022.media.mit.edu/" target="blank_">Opera of the Future</Anchor> group, this is primarily a <strong>project course</strong>. There will be three projects during the term: a first “mini” project to communicate a unique aspect of the student’s own creativity; a second project to develop a tool to enhance creativity for others; and a final, more ambitious project - which might take the form of a performance, an installation, or something not-yet-imagined - capable of inspiring a profound sense of creative potential in anyone who experiences it.
            </Text>
            <br/>
            <Text p={"md"} pt={"xs"} pb={0}>
                If you’re interested in taking the course this fall, please fill out this <Anchor href="https://forms.gle/GuWxUQQnTow2J8BS8" target="blank_">form</Anchor>.
            </Text>
        </>
    );
}

export default HomePage;
