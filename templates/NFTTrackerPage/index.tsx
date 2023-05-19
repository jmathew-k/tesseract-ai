import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Photo from "@/components/Photo";

const PhotoEditingPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Track NFT Floor">
                <Question
                    content="Track this NFT across all marketplaces"
                    time="Just now"
                    image="/images/pudgy.png"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Photo
                        image="/images/pudgy.png"
                        content="PUDGY PENGUIN #4609 isn't listed for sale in any of the popular marketplaces like OpenSea, Rarible, LooksRare or Blur."
                    />
                </Answer>
                <Question
                    content="Alright, can you find similar PFPs that are currently listed ?"
                    time="Just now"
                />
                <Answer time="Just now">
                    <Photo
                        image="/images/pudgy3.png"
                        content="Pudgy Penguin #818 is on Sale through OpenSea"
                        colorPicker
                    />
                </Answer>
                <Answer time="Just now">
                    <Photo
                        image="/images/pudgy2.png"
                        content="Also, Pudgy Penguin #2893 through OpenSea"
                    />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                // image="/images/photo.jpg"
            />
        </Layout>
    );
};

export default PhotoEditingPage;
