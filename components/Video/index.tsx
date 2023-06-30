import { useState } from "react";
import Select from "@/components/Select";
import Icon from "@/components/Icon";
import View from "./View";

const languages = [
    {
        id: "0",
        title: "Index 1",
    },
    {
        id: "1",
        title: "OpenSea",
    },
    {
        id: "2",
        title: "Rarible",
    },
];

const voices = [
    {
        id: "0",
        title: "test 1",
    },
    {
        id: "1",
        title: "test 2",
    },
    {
        id: "2",
        title: "test 3",
    },
];

type VideoProps = {};

const Video = ({}: VideoProps) => {
    const [language, setLanguage] = useState<any>(languages[0]);
    const [voice, setVoice] = useState<any>(voices[0]);

    return (
        <div className="">
            <View />
            <div className="mt-4">Price: $0.00000161 | Market Cap: $632M | Volume(24): $194M | Volume/Market Cap(24h): 31.00%

            </div>
            <div className="flex flex-wrap">
                <button className="btn-dark btn-small mr-4 mt-4">
                    <span>Code</span>
                    <Icon name="download" />
                </button>
                <Select
                    className="mr-4 mt-4"
                    classOptions="min-w-[12rem]"
                    items={languages}
                    value={language}
                    onChange={setLanguage}
                    small
                    up
                />
                <Select
                    title="Algorithm"
                    icon=""
                    className="mr-4 mt-4"
                    items={voices}
                    value={voice}
                    onChange={setVoice}
                    small
                    up
                />
            </div>
        </div>
    );
};

export default Video;
