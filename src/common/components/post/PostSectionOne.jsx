import React, { useRef } from 'react';
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import { HoverActiveClass } from '../../utils';
import PostLayoutOne from "./layout/PostLayoutOne";

const PostSectionOne = ({postData}) => {
    const hoverRef = useRef('');
    HoverActiveClass(hoverRef);

    return ( 
        <div className="axil-featured-post axil-section-gap bg-color-grey">
            <div className="container">
                <SectionTitleOne title="More Featured Posts." />
                <div className="row" ref={hoverRef}>
                    <PostLayoutOne postData={postData} itemShow="2"/>
                </div>
            </div>
        </div>

    );
}
 
export default PostSectionOne;