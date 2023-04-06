import React from 'react'
import { Avatar, IconButton, Stack, Typography } from "@mui/material"
//Icons
import { AiFillHeart } from "react-icons/ai"
import { MdForum } from "react-icons/md"
import {FaCommentDots} from "react-icons/fa"

const NotificationCards = () => {
    const iconChanger = (notifType) => {
        if(notifType === "like" ){
            return <AiFillHeart style={{color:"white", fontSize:12}} />
        }else if(notifType === "comment" ){
            return <FaCommentDots style={{color:"white", fontSize:12}} />
        }else if(notifType === "forum" ){
            return <MdForum style={{color:"white", fontSize:12}} />
        }
    }

    const timeAgo = (prevDate) => {
        const diff = Number(new Date()) - prevDate;
        const minute = 60 * 1000;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;
        const year = day * 365;
        switch (true) {
            case diff < minute:
                const seconds = Math.round(diff / 1000);
                 return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`
            case diff < hour:
                return Math.round(diff / minute) + ' minutes ago';
            case diff < day:
                return Math.round(diff / hour) + ' hours ago';
            case diff < month:
                return Math.round(diff / day) + ' days ago';
            case diff < year:
                return Math.round(diff / month) + ' months ago';
            case diff > year:
                return Math.round(diff / year) + ' years ago';
            default:
                return "";
        }
    };
  return (
    <React.Fragment>
        <Avatar/>
            <IconButton sx={{ bgcolor:'#BFCBA5', padding:0.5, marginLeft:"-7px", marginTop:1, border:"1px solid white" }}>
                {iconChanger("like")}
            </IconButton>
            <Stack direction='column' sx={{ ml:2 }}>
                <Typography variant='body2' sx={{ fontFamily:'raleway'}} >
                    <b>{"John Eliezar Rodis"}</b> {" Liked your post: "} {'"Hi this is my first post hahahaha"'} 
                </Typography>
                <Typography variant='caption' sx={{ fontFamily:'raleway', color:" #E8EAED" }} >
                    {timeAgo(new Date("2023-02-24 12:17:52").getTime())} 
                </Typography>
            </Stack>
    </React.Fragment>
  )
}

export default NotificationCards