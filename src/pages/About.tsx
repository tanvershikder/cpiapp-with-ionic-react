import { IonButtons, IonContent, IonFooter, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import React from 'react';
import Footer from '../components/Footer';
import './About.css'

const About = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className='aboutbody'>
                    <h1 className='aboutHeader'> Chattogram Polytechnic Institute</h1>
                    <p className='aboutInfo'>
                        Chattogram Polytechnic Institute is one of the leading Institutes in Bangladesh in the field of Technical Education. It was established in the year 1962 stretching over 35 acres of land decked with hills and dales, ponds, and stunningly green tall trees. It is the second largest Polytechnic Institute in Bangladesh, situated at Nasirabad under Khulshi Thana in Chattogram port city.

                        This Institute setup under the Ministry of education, Bangladesh is working to increase the number of technically educated people in the country as the number is not satisfactory. Its administrative activities are directed by the Directorate of Technical Education (DTE), Bangladesh and all of its academic courses are implemented by Bangladesh Technical Education Board (BTEB).

                        There is a three storied academic building used for running all academic activities and it includes a physics lab, a chemistry lab, three electronic labs, four computer labs. Besides, there are ten workshops. It has five students’ hostels including a female hostel. For teachers and students, there is a large residential area in the campus. In the southern campus there is a very large playground. All of its beauty makes the campus a peaceful learning environment.

                        It has been proved that skilled manpower is one of the three major components required for becoming middle income earning country. The government of Bangladesh is taking different steps for modernizing and improving the quality of technical education. Keeping the same pace with this goal, Chattogram Polytechnic Institute is working sincerely achieving the goal.
                    </p>

                    <section>
                        <h3 className='contactheder'>Contact Us</h3>
                        <div className='contactus'>
                            <p>
                            Tel : +88-031-683538
                            </p>
                            <p>
                            Fax : +88-031-62534
                            </p>
                            <p>E-mail : info@ctgpoly.gov.bd</p>
                        </div>
                    </section>

                </div>
                <IonFooter>
                    <Footer></Footer>
                </IonFooter>
            </IonContent>
        </IonPage>
    );
};

export default About;