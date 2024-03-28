// import React, { useEffect } from 'react';
// import useAuth from '../hook/useAuth';

// function BeforeUnload() {
//     const { setAuth, auth } = useAuth();

//     useEffect(() => {
//         const handleBeforeUnload = async (event) => {
//             event.preventDefault();

          
//             try {
//                 const position = await new Promise((resolve, reject) => {
//                     navigator.geolocation.getCurrentPosition(resolve, reject);
//                 });
//                 const { latitude, longitude } = position.coords;
//                 const location = { latitude, longitude };
//                 console.log("Before updating auth:", auth);
//                 setAuth([...auth, location]);
//                 console.log("After updating auth:", auth);

//             } catch (error) {
//                 console.error('Error getting location:', error);
//             }
//         };

//         window.addEventListener('beforeunload', handleBeforeUnload);

//         // ניקוי ה־event listener בעת עזיבת הקומפוננטה
//         return () => {
//             window.removeEventListener('beforeunload', handleBeforeUnload);
//         };
//     }, [auth, setAuth]);

//     return null; // ריקה כיוון שאין דבר להציג בריאקט
// }

// export default BeforeUnload;
