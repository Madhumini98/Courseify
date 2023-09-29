import React from 'react'
import '../styles/RoadMaps.css'
import Logo from '../core/logo/logo'
import SearchBar from '../core/searchBar/searchBar'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'
import RoadMapCard from '../core/roadmapBox//roadMapBox'

export const RoadMaps = () => {
  return (
    <>
    <div className="header">
        <div className="headerleft">
            <Logo/>
        </div>
        <div className="headercenter">
            <div className="roadmapheadertext">
                <p className='roadmapheadertextmain'>  Chart Your Path to Progress </p>
            </div>
        </div>
        <div className="headerright">
            <SearchBar/>
            <Notification/>
            <Profile/>
        </div>
    </div>
    
    <div className="divider">
        <span className="styled-text">
            Role Based Roadmaps
        </span>
    </div>
    <div className="roadmapcontainer">
        <div className="line1">
            <RoadMapCard
                title = "Frontend"
            />
            <RoadMapCard
                title = "Full Stack"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "Cyber Security"
                isFirstRoadMap
            />
        </div>
        <div className="line2">
            <RoadMapCard
                title = "Backend"
            />
            <RoadMapCard
                title = "Android"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "React Native"
                isFirstRoadMap
            />
        </div>
        <div className="line3">
            <RoadMapCard
                title = "DevOps"
            />
            <RoadMapCard
                title = "UX Design"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "Flutter"
                isFirstRoadMap
            />
        </div>
    </div>
    <div className="divider2">
        <span className="styled-text2">
            Skill Based Roadmaps
        </span>
    </div>
    <div className="sbcontainer">
        <div className="sbline1">
            <RoadMapCard
                title = "Computer Science"
            />
            <RoadMapCard
                title = "Vue"
                isFirstRoadMap
            />
        </div>
        <div className="sbline2">
            <RoadMapCard
                title = "React"
            />
            <RoadMapCard
                title = "JavaScript"
                isFirstRoadMap
            />
        </div>
        <div className="sbline3">
            <RoadMapCard
                title = "Angular"
            />
            <RoadMapCard
                title = "Node.js"
                isFirstRoadMap
            />
        </div>
    </div>
    
    </>
  )
}
