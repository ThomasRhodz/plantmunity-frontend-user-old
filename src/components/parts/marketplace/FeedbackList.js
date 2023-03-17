import React from 'react'
import { Stack } from '@mui/material'
import FeedbackCard from '../../card/marketCards/FeedbackCard'
const FeedbackList = ({productID}) => {
    const sampleFeedbacks = [
        {
            id:1,
            first_name:"Elliot",
            middle_name:'Naham',
            last_name:'Zucker',
            user_image:"https://www.lightstalking.com/wp-content/uploads/portrait-photography-outdoors.jpeg",
            date: "01-10-23",
            content:"Thank you, the product was in good shape! Defenitely gonna buy again :)",
        },
        {
            id:2,
            first_name:"Ellena",
            middle_name:'Moira',
            last_name:'Zack',
            user_image:"https://www.adorama.com/alc/wp-content/uploads/2017/06/1-shutterstock_588634790.jpg",
            date: "01-10-23",
            content:"Thank you, the product was in good shape! Defenitely gonna buy again :)",
        },
        {
            id:3,
            first_name:"Thomas",
            middle_name:null,
            last_name:'Adrian',
            user_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nvqgtDdKsbQqYONwP-9LExbc5zU4CvKg9g&usqp=CAU",
            date: "01-10-23",
            content:"Thank you, the product was in good shape! Defenitely gonna buy again :)",
        },
        
    ]
  return (
    <Stack direction="column" alignItems="center" sx={{ width: "100%", p: 2, bgcolor:"#F3F4F8", borderRadius:2 }}>
      {sampleFeedbacks.map(
        ({
          id,
          first_name,
          middle_name,
          last_name,
          user_image,
          content,
          date,
        }) => {
          return (
            <Stack key={id} direction='row' sx={{ width:'100%', bgcolor:'white', p:1, mt:2, boxShadow:'2.0px 3.0px 3.0px hsl(0deg 0% 0% / 0.38)', borderRadius:2 }}>
              <FeedbackCard
                id={id}
                firstName={first_name}
                middleName={middle_name}
                lastName={last_name}
                image={user_image}
                content={content}
                date={date}
              />
            </Stack>
          );
        }
      )}
    </Stack>
  );
}

export default FeedbackList