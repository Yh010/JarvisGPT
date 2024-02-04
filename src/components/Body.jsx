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
                <Input />
                <VoiceSearchButton />
                <SubmitButton/>
            </div>
        </div>
    )
}

export default Body;