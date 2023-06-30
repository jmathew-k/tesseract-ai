import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Video from "@/components/Video";

const VideoGenerationPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Track Token Price">
                <Question
                    content={
                        <>
                            <p>What's the current price of $PEPE ?</p>
                            <br></br>
                            <p>
                                Analyze and give a summary on the price changes this year till date.
                            </p>
    
                        </>
                    }
                    time="Just now"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Video />
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

export default VideoGenerationPage;
