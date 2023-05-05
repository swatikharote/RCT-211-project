import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Image } from '@chakra-ui/react';
const images = ["https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?s=612x612&w=0&k=20&c=Yp-rzpmY_hbhpbTE38z6toouRKW-lAEN-ZvuWvH8kKE="
    , "https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU="
    , "https://media.istockphoto.com/id/1142877679/photo/young-people-enjoying-whitewater-river-rafting-in-river-ganges-rishikesh-india.jpg?s=612x612&w=0&k=20&c=sskxkTsmcseiloBTkv7UGTtb2ZjPTBi-q2aiY83zGXQ="
    , "https://media.istockphoto.com/id/1142877679/photo/young-people-enjoying-whitewater-river-rafting-in-river-ganges-rishikesh-india.jpg?s=612x612&w=0&k=20&c=sskxkTsmcseiloBTkv7UGTtb2ZjPTBi-q2aiY83zGXQ="
    , "https://media.istockphoto.com/id/1031430214/photo/young-woman-kayaking-through-the-backwaters-of-monroe-island.jpg?s=612x612&w=0&k=20&c=kbv2s1kknMzJgk8Nd-W2VNIf0AFx48YtCqygtI3Ppos="]

export const ImageSlider = () => {
    const [imgInx, setImgInx] = useState(0);

    useEffect(() => {

        setInterval(() => {
            if (imgInx > images.length - 1) {
                setImgInx(0)

            } else {
                setImgInx((prev) => prev + 1)

            }
        }, 3000);



    }, [imgInx])

    return (
        <Box w={"800px"}>
            <Image src={images[imgInx]} alt='test' />
        </Box>
    )
}
