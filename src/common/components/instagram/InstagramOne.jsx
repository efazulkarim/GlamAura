import Image from 'next/image';
import InstaData from '../../../data/instagram/instagram.json';


const InstagramOne = ({parentClass}) => {
    return (
        <div className={`axil-instagram-area axil-section-gap ${parentClass || ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2 className="title">Instagram</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    <div className="col-lg-12">
                        <ul className="instagram-post-list">
                            {InstaData.map((data) => (
                                 <li className="single-post" key={data.id}>
                                 <a href={data.url}>
                                     <Image
                                         src={data.image}
                                         height={190}
                                         width={190}
                                         alt="Instagram Images"
                                     />
                                     <span className="instagram-button">
                                         <i className="fab fa-instagram" />
                                     </span>
                                 </a>
                             </li>
                            ))}

                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramOne;
