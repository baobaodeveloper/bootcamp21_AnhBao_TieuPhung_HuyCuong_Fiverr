import { Card } from 'antd';
import { SiBuddy } from 'react-icons/si';

import 'antd/dist/antd.min.css';
import './ListTypeWorkPage.scss';
import { useParams } from 'react-router-dom';
import { BaseService } from '../../services/baseService';
import { useEffect, useState } from 'react';

const { Meta } = Card;

let typeWorkService = new BaseService();

export const ListTypeWorkPage = () => {
  const [typeWork, setTypeWork] = useState([]);
  let { id } = useParams();
  console.log("id in listtypework ", id);

  useEffect(() => {
    typeWorkService
      .get("api/type-jobs")
      .then((res) => {
        console.log(res.data);
        setTypeWork(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  console.log(typeWork);


  return (
    <div className='list-type-work-page'>

    </div>
  );
};



//  <header>HOC HEADER</header>

//       <div className='list-type-work-page-header'>
//         <h1>Programming And Tech</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//           Quas, nulla eum. Itaque et vel sequi.
//         </p>
//         <div>
//           <SiBuddy />
//           <span>How Feverr Wokrs</span>
//         </div>
//       </div>

//       <div className='list-type-work-page-content'>
//         <div className='list-type-work-page-content-left'>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
//         </div>
//         <div className='list-type-work-page-content-right'>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//           <div className='list-type-work-page-content-right-item'>
//             <Card
//               hoverable
//               style={{
//                 width: 240,
//               }}
//               cover={
//                 <img
//                   alt='example'
//                   src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
//                 />
//               }
//             >
//               <Meta title='Europe Street beat' />
//             </Card>
//           </div>
//         </div>
//       </div>

//       <div className='list-type-work-page-footer'>
//         <div className='list-type-work-page-footer-item'>
//           <h1>Your safety</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Omnis, incidunt.
//           </p>
//         </div>
//         <div className='list-type-work-page-footer-item'>
//           <h1>Your safety</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Omnis, incidunt.
//           </p>
//         </div>
//         <div className='list-type-work-page-footer-item'>
//           <h1>Your safety</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Omnis, incidunt.
//           </p>
//         </div>
//       </div>

//       <footer>HOC FOOTER</footer>