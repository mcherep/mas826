import { Title, Group, Text, Divider, Anchor } from "@mantine/core";

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
                    (due by class on February 15)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                CREATIVITY: BIG-C AND LITTLE-C
            </Title>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Read
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                Amabile and Pillemer, <Anchor href="https://web.media.mit.edu/~tod/media/pdfs/Amabile_Perspectives-on-the-Social-Psychology-of-Creativity.pdf" target="blank_">Perspectives on the Social Psychology of Creativity</Anchor>
                <br/>
                Kaufman and Beghetto, <Anchor href="https://www.scinapse.io/papers/2131018663" target="blank_">Beyond Big and Little: The Four C Model of Creativity</Anchor>
                <br/>
                Neff, <Anchor href="https://www.tandfonline.com/doi/epdf/10.1080/07494467.2014.998414?needAccess=true&role=button" target="blank_">Point/Counterpoint: John Cage Studies with Arnold Schoenberg</Anchor>
                <br/>
                Oliveros, <Anchor href="https://www.whitefungus.com/pauline-oliveros-freedom-through-music" target="blank_">Freedom Through Music</Anchor>
                <br/>
                Minsky, <Anchor href="https://web.media.mit.edu/~minsky/papers/ComputersCantThink.txt" target="blank_">Why People Think Computers Can’t</Anchor>
            </Text>

            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Create
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                For next class (due on Feb. 15), create a 1-minute sound portrait to introduce yourself,
                <br/>
		highlighting/communicating some special aspect of your creative practice, style and/or experience.
            </Text>

            <Divider/>

            <Group>
                <Title order={2} size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Assignment 2
                </Title>
                <Title order={2} size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due by class on February 22)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                MUSIC AS A TESTBED FOR CREATIVITY
            </Title>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Read
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                Minsky, <Anchor href="https://www.musicmindandmeaning.org/" target="blank_">Music, Mind and Meaning</Anchor>
                <br/>
		Wilkinson, <Anchor href="https://web.media.mit.edu/~tod/media/pdfs/phantom_of_brain_opera-cropped_small.pdf" target="blank_">Phantom of the Brain Opera</Anchor>
                <br/>
		Machover, <Anchor href="https://opera.media.mit.edu/publications/machover_bttech2004_shaping_minds_musically.pdf" target="blank_">Shaping Minds Musically</Anchor>
                <br/>
		Lumaga/Machover, <Anchor href="https://web.media.mit.edu/~tod/media/pdfs/LOFT_TorontoSymphony_8-13.pdf" target="blank_">A Toronto Symphony: Tod Machover’s Participatory Orchestral Opera</Anchor>
                <br/>
		Woolfe, <Anchor href="https://www.nytimes.com/2015/11/15/arts/music/detroit-symphony-tackles-an-adventurous-premiere.html" target="blank_">Detroit Symphony Tackles an Adventurous Premiere</Anchor>
            </Text>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Think
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                Imagine/describe a tool that would open up creativity in someone else. First glimpse; musical or not.
            </Text>
        </>
    );
}

export default Assignments;
