import SubmitButton from "../Buttons/Submit";
import VoiceSearchButton from "../Buttons/VoiceSearch";
import Input from "../assets/Input";

function Body(){
    return (
        <div>
            <div>
                search OUtput will be here
            </div>
            <div>
                <div className="flex">
                    <Input />
                    <VoiceSearchButton />
                    <SubmitButton/>
                </div>
            </div>
        </div>
    )
}

export default Body;