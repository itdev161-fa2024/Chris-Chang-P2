import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <div id="profileImgBorder">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg"/>
                </div>
                <input 
                    placeholder="What's happening? Share it to pandaSocial"
                    className="shareInput"
                />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <PermMedia className="shareIcon" id="iconPhotoVideo"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOptions">
                    <Label className="shareIcon" id="iconTag"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOptions">
                    <Room className="shareIcon" id="iconLocation"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOptions">
                    <EmojiEmotions className="shareIcon" id="iconEmoji"/>
                    <span className="shareOptionText">Emojis</span>
                </div>
            </div>
        </div>
    </div>
  )
}
