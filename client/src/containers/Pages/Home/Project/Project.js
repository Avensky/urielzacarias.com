import React from 'react';
//import user from '../../../../../assets/images/user.jpg'
import user from '../../../../assets/images/author2.png'
import classes from './Project.module.scss';
//import TextTruncate from 'react-text-truncate'; // recommend
//import { NavLink } from 'react-router-dom'



const project = (props) => (
    <div className={classes.containerWrapper}>
        {props.btn      
            ? <div className={classes.btn}><h3>{props.btn}</h3></div>
            : null}
    <div className={[classes.container].join(' ')}  onClick={props.clicked}>
        <div className={classes.CardThumbnail}>
            {props.pic      ? <a href={props.link}><img src={props.pic} alt="user"/></a>  : null}

            {props.vid      ? <div className={classes.iframeContainer}><iframe 
                src={props.vid}
                style={{height: '360px', maxHeight: '100%', width: '100%'}} 
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='YouTube video player'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                /></div>
            : null}

            {props.tik      ? <div className={classes.blockquoteContainer}><blockquote 
                class="tiktok-embed" 
                cite="https://www.tiktok.com/@uriza86/video/6911530527170252038" 
                data-video-id="6911530527170252038" 
                style={{height: '760px', maxHeight: '100%',width: '100%', padding: 0, margin: 0}} > 
                <section> 
                    <a 
                        target="_blank" 
                        title="@uriza86" 
                        href="https://www.tiktok.com/@uriza86">@uriza86
                    </a> 
                    <p>Sweet child of mine solo 
                        <a  title="guitarsolo" 
                            target="_blank" 
                            href="https://www.tiktok.com/tag/guitarsolo">##guitarsolo</a> 
                        <a  title="gunsnroses" 
                            target="_blank" 
                            href="https://www.tiktok.com/tag/gunsnroses">##gunsnroses</a> 
                        <a  title="sweetchildofmine" 
                            target="_blank" 
                            href="https://www.tiktok.com/tag/sweetchildofmine">##sweetchildofmine</a>
                    </p> 
                    <a  target="_blank" 
                        title="♬ original sound - Uriel Zacarias" 
                        href="https://www.tiktok.com/music/original-sound-6911530511630387974">♬ original sound - Uriel Zacarias</a> 
                </section> 
            </blockquote></div>
            : null}
        </div>

        {props.description
            ?   <div className={classes.description} >
                    <h4>{props.description}</h4>
                    <ul>
                        <li>{props.item1}</li>
                        <li>{props.item2}</li>
                        <li>{props.item3}</li>
                        <li>{props.item4}</li>
                        <li>{props.item5}</li>
                        <li>{props.item6}</li>
                    </ul>
                </div>
            : null }
        </div>
    </div>   
    )

export default project;