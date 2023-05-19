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
            <Chat title="Execute NFT Swap">
                <Question
                    content={
                        <>
                            <p>Execute a series of trades in give 25% profits in ETH for following asset</p>
                            <br></br>
                            <p>
                                Plan and execute a comprehensive arbitrage trading strategy to get 25% on the NFT asset:
                            </p>
                            <p> Azuki #5936</p>
                        </>
                    }
                    time="Just now"
                    image="/images/azuki.png"
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
