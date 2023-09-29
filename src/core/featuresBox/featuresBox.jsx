import React from 'react'
import './featuresBox.css'

export const FeaturesBox = ({ImageSrc, featureTopic, featureTopic2, featureText,imageWidth, imageHeight, imagepaddingLeft, imagemarginTop, imagemarginBottom}) => {

  return (
    <>
        <div className="feature">
                <div className="fimg">
                    <img src = {ImageSrc} alt='' className='featureimg' style={{width: imageWidth, height: imageHeight, paddingLeft: imagepaddingLeft, marginTop: imagemarginTop, marginBottom: imagemarginBottom}}/>
                </div>
                <div className="fline">
                </div>
                <div className="fheading">
                    <h>{featureTopic} <br/> {featureTopic2}</h>
                </div>
                <div className="ftext">
                    <p>{featureText}</p>
                </div>
            </div>
    </>
  )
}
