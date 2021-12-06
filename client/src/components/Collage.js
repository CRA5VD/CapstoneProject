import React from 'react'
import { ReactPhotoCollage } from 'react-photo-collage';
import MacysDowntownDazzle from '../img/BrandVendor/Z14MacysDowntownDazzle.jpg'
import ElvesOnElder from '../img/BrandVendor/Z13ElvesOnElder.jpg'
import ChristmasNightOfLights from '../img/BrandVendor/Z15ChristmasNightOfLights.jpg'
import HolidayTrains from '../img/BrandVendor/Z16HolidayTrains.jpeg'
import CincinnatiGolidayProps from '../img/BrandVendor/Z17CincinnatiGolidayProps.jpg'
import AChristmasCarol from '../img/BrandVendor/Z18AChristmasCarol.jpg'



const setting = {
  width: '700px',
  height: ['400px', '170px'],
  layout: [1, 4],
  photos: [
    { source: MacysDowntownDazzle },
    { source: ChristmasNightOfLights },
    { source: HolidayTrains },
    { source: CincinnatiGolidayProps },
    { source: AChristmasCarol },
    { source: ElvesOnElder },
  ], 

  showNumOfRemainingPhotos: true
};



const Collage = () => {
  return (
    <div className="d-flex justify-content-center container-fluid home-photo-collage">
    <div className="row d-flex justify-content-center text-center align-items-center min-vh-100 home-sub-collage">
      <ReactPhotoCollage {...setting} />
    </div>
  </div>
  )
}

export default Collage
