import { Title, Group, Text, Divider, Anchor, Button } from "@mantine/core";
import { IconExternalLink } from '@tabler/icons';

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
            <Text p={"xl"} pt={0}>
                Questions in the discussion at the end of the slides seen in class.
            </Text>
            <Group p={"xl"} pt={0}>
                <Button component="a" href="bigclittlec.pdf" variant="outline" leftIcon={<IconExternalLink size={14} />}>
                    Slides
                </Button>
            </Group>

            <Divider/>

            <Group>
                <Title order={2} size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Assignment 3
                </Title>
                <Title order={2} size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due by class on March 1)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                AI TOOLS FOR CREATIVITY
            </Title>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Read and Listen
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                George Lewis - Historic Perspective: <Anchor href="https://www-oxfordhandbooks-com.libproxy.mit.edu/view/10.1093/oxfordhb/9780190226992.001.0001/oxfordhb-9780190226992-e-29" target="blank_">Why Do We Want Our Computers to Improvise?</Anchor>
                <br/>
                <Anchor href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fStability.ai&c=E,1,twsXS1d3YAyhkuhppO-HToWi6CmGt-rQGtFQz6piETqp-jAZ6hFXJH6hMkQEJduDjJW8iG2x6ntO8xVfBGJQqS3CUx6bIzyltr3_XCUYYo1Lav6yNd13_VEaBg,,&typo=1&ancr_add=1" target="blank_">Stability.ai</Anchor> - Modern Perspective: <Anchor href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2finterdependence.fm%2fepisodes%2fopen-source-ai-and-stable-diffusion-with-emad-mostaque&c=E,1,HXflt1BDtY_CL6w5t70HzVQopv5rPXlG60gSgFttCn__3UHTZgE7JXWyQi5BonZGJPr1cF5toyE3WYzHx0Y2V4PB82pMf-yb-FUOtfWuHYB0We__5sf7rHs,&typo=1" target="blank_">Holly Herndon’s podcast interview of Emad Mostaque</Anchor>
                <br/>
                Roger Dannenberg: <Anchor href="https://www.jstor.org/stable/pdf/3680940.pdf" target="blank_">Music Representation Issues, Techniques, and Systems</Anchor>
                <br/>
                Rebecca Fiebrink and Baptiste Caramiaux: <Anchor href="https://arxiv.org/pdf/1611.00379.pdf" target="blank_">The Machine Learning Algorithm as Creative Musical Tool</Anchor>
                <br/>
            </Text>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Tools and Demos
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                Commercial tools for music making with very few parameters (genre, tempo): <Anchor href="https://www.aiva.ai/" target="blank_">AIVA</Anchor>, <Anchor href="https://www.ampermusic.com/" target="blank_">Amper</Anchor>, <Anchor href="https://www.beatoven.ai/" target="blank_">beatoven</Anchor>, <Anchor href="https://mubert.com/render/pricing?via=adk334" target="blank_">Mubert</Anchor>
                <br/>
                Foundation Models (<Anchor href="https://en.wikipedia.org/wiki/Foundation_models" target="blank_">ref</Anchor>) for AI generated Music with prompting: <Anchor href="https://openai.com/blog/jukebox/" target="blank_">Jukebox</Anchor>, <Anchor href="https://google-research.github.io/seanet/musiclm/examples/" target="blank_">MusicLM</Anchor>
                <br/>
                Living Singing AI (our work) [<Anchor href="https://web.media.mit.edu/~manaswim/Thesis_Media/Thesis/manaswi-MAS-2021-Thesis.pdf" target="blank_">paper</Anchor>] [<Anchor href="https://web.media.mit.edu/~manaswim/Thesis_Media/Demos/organismGallery/" target="blank_">demo</Anchor>] [<Anchor href="https://web.media.mit.edu/~manaswim/Thesis_Media/Demos/video/final_video.mp4" target="blank_">video</Anchor>], AI Radio (our work) [<Anchor href="https://arxiv.org/abs/2206.00485" target="blank_">paper</Anchor>] [<Anchor href="http://www.artificial.fm/" target="blank_">demo</Anchor>], DDSP [<Anchor href="https://sites.research.google/tonetransfer" target="blank_">demo</Anchor>], Rave [<Anchor href="https://github.com/acids-ircam/RAVE" target="blank_">github</Anchor>], Riffusion [<Anchor href="https://www.riffusion.com/" target="blank_">demo</Anchor>]
            </Text>

            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Extra
            </Text>
            <Text p={"xl"} pt={0} pb={"xl"}>
                <Anchor href="https://www.youtube.com/watch?v=ec88U5R7cJ0" target="blank_">George Lewis (Voyager, 2011 performance ‘Interactive Trio’)</Anchor> - AI collaborator for performances
                <br/>

                Holly Herndon Ted Talk - <Anchor href="https://www.youtube.com/watch?v=5cbCYwgQkTE&ab_channel=TED" target="blank_">What if You Could Sing in Your Favorite Musician&apos;s Voice?</Anchor>
                <br/>

                <Anchor href="https://interdependence.fm/" target="blank_">Interdependence Podcast</Anchor> (Matt Dryhurst + Holly Herndon with prominent 21st century art+tech instigators)
                <br/>

                <Anchor href="https://linkprotect.cudasvc.com/url?a=https%3a%2f%2fualresearchonline.arts.ac.uk%2fid%2feprint%2f16687%2f1%2fFiebrinkTruemanCook_NIME2009.pdf&c=E,1,VUaVykuGnYz0wWL7aw9WWXTVOM58zlqRA-FZIbSYI6kh0a-8VspR456d43z9kPokJPU7WOPxuRwChTA5EJ0HDs1NwBDVh30imMs3uVSfk_tIvQ,,&typo=1" target="blank_">A Meta-Instrument for Interactive, On-the-fly Machine Learning</Anchor>
                <br/>

                <Anchor href="https://dl.acm.org/doi/pdf/10.1145/3414472" target="blank_">Designing Deep Reinforcement Learning for Human Parameter Exploration</Anchor>
            </Text>

            <Divider/>

            <Group>
                <Title order={2} size={25} p={"md"} pt={"xl"} pr={0} pb={0}>
                    Assignment 4
                </Title>
                <Title order={2} size={15} pt={"xl"} pb={0} color={"dimmed"}>
                    (due by class on March 9)
                </Title>
            </Group>
            <Title order={2} size={14} p={"md"} pt={0} color={"dimmed"} style={{fontVariant: "small-caps"}}>
                ENHANCING CREATIVITY FOR OTHERS
            </Title>
            <Text td="underline" p={"md"} pt={0} pb={"xs"}>
                Create
            </Text>
            <Text p={"xl"} pt={0}>
                A one minute sound piece using AI or any creative assisting tool. You can see some presented in class here:
            </Text>
            <Group p={"xl"} pt={0}>
                <Button component="a" href="musicai.pdf" variant="outline" leftIcon={<IconExternalLink size={14} />}>
                    Slides
                </Button>
                <Button component="a" href="musicai_notes.pdf" variant="outline" leftIcon={<IconExternalLink size={14} />}>
                    Notes
                </Button>
            </Group>
        </>
    );
}

export default Assignments;
