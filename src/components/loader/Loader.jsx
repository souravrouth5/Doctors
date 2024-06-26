import './Loader.css'

export function Loader() {

    return (
        <>
            <div className="icon heart">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2674 1328.5" width="100%" height="100%" enable-background="new 0 0 2674 1328.5">
                    <path fill="#EE1C24" stroke="#EE1C24" stroke-width="41.25" stroke-linejoin="round" stroke-miterlimit="10" d="M57,687.5h277.3 l49.3-178.7l116,770.7l100-1228L669,806.2l70.7-116l428.4-0.5C997.2,535.3,876.3,379.1,912,225.5 c25.9-111.6,108.1-168.8,203.8-175.1c6.6-0.4,13.1-0.7,19.5-0.7c96.2,0,162.2,49.1,200.9,124.9c37-72.6,101.7-125.7,192.7-125.7 c8.6,0,17.5,0.5,26.6,1.5c104.7,11.3,180.7,71,204.9,165.2c38.1,148.5-75.8,315.2-251.5,474.4l460.1,1.5l65.3,118.7l73.3-738.7 l97.3,1196l116-752l48,170.7h248" /> <script xmlns="" />
                </svg>
            </div>
            {/* <div className="container">
                <div class="icon heart">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 2674 1328.5" enable-background="new 0 0 2674 1328.5">
                        <path id="heart-path" fill="transparent" stroke="#EE1C24" stroke-width="41.25" stroke-linejoin="round" stroke-miterlimit="10" d="M57,687.5h277.3 l49.3-178.7l116,770.7l100-1228L669,806.2l70.7-116l428.4-0.5C997.2,535.3,876.3,379.1,912,225.5 c25.9-111.6,108.1-168.8,203.8-175.1c6.6-0.4,13.1-0.7,19.5-0.7c96.2,0,162.2,49.1,200.9,124.9c37-72.6,101.7-125.7,192.7-125.7 c8.6,0,17.5,0.5,26.6,1.5c104.7,11.3,180.7,71,204.9,165.2c38.1,148.5-75.8,315.2-251.5,474.4l460.1,1.5l65.3,118.7l73.3-738.7 l97.3,1196l116-752l48,170.7h248" />
                        <circle id="pointer" r="20" fill="#EE1C24" />
                    </svg>
                </div>
            </div> */}

            {/* <div className="icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" >
                    <g id="Background">
                        <rect id="Background_8_" x="0" y="0" style={{fill:"#F2F2F2"}} width="1200" height="1200" />
                    </g>
                    <g id="Graphic_elements">
                        <rect y="580.178" style={{fill:"#BB1616"}} width="1200" height="12.415" />
                        <g id="Graphic_elements_6_">
                            <g>
                                <g>
                                    <path style={{fill:"#BB1616"}} d="M887.392,478.182c-4.825-38.117-23.612-89.962-85.706-120.487
					c-69.032-33.937-122.801-13.28-155.75,10.024c-22.216,15.711-37.898,34.436-46.622,46.422
					c-8.724-11.986-24.406-30.711-46.622-46.422c-32.95-23.306-86.72-43.958-155.75-10.024
					c-62.094,30.526-80.88,82.37-85.707,120.487c-8.99,71.007,23.313,153.678,78.554,201.043
					c71.266,61.106,202.061,176.166,203.374,177.321c1.759,1.547,3.955,2.32,6.151,2.32s4.392-0.773,6.151-2.32
					c1.313-1.155,132.108-116.215,203.374-177.321C864.08,631.861,896.382,549.189,887.392,478.182z"/>
                                </g>
                            </g>
                            <path style={{fill:"#FFFFFF"}} d="M425.311,592.593c2.63,0,4.975-1.658,5.852-4.137l9.762-28.916l25.865,123.609
			c0.611,2.92,3.239,5.025,6.196,4.934c2.983-0.058,5.503-2.228,6.001-5.169l28.608-168.923l21.486,98.836
			c0.583,2.679,2.855,4.66,5.589,4.871c2.728,0.197,5.282-1.397,6.27-3.957l16.475-42.732l7.46,17.823
			c0.966,2.308,3.224,3.81,5.726,3.81h46.238c2.65,0,5.008-1.682,5.87-4.187l9.822-28.546l25.788,123.241
			c0.602,2.881,3.142,4.936,6.074,4.936c0.04,0,0.081,0,0.121-0.001c2.982-0.058,5.503-2.228,6.001-5.169l28.607-168.923
			l21.486,98.836c0.583,2.679,2.854,4.66,5.588,4.871c2.729,0.197,5.282-1.397,6.27-3.956l16.476-42.733l7.46,17.823
			c0.967,2.308,3.224,3.81,5.726,3.81h108.008c0-0.001,0.001-0.001,0.001-0.002c1.704-4.098,3.308-8.236,4.794-12.413H766.26
			l-11.828-28.257c-0.968-2.31-3.227-3.81-5.726-3.81c-0.029,0-0.06,0-0.089,0c-2.534,0.036-4.791,1.609-5.704,3.974l-14.576,37.805
			l-23.907-109.971c-0.632-2.907-3.223-4.998-6.21-4.888c-2.973,0.07-5.48,2.237-5.977,5.17l-28.493,168.247l-23.685-113.185
			c-0.572-2.734-2.9-4.75-5.688-4.924c-2.782-0.176-5.349,1.534-6.258,4.175l-15.712,45.664h-37.678l-11.828-28.257
			c-0.968-2.31-3.227-3.81-5.726-3.81c-0.029,0-0.059,0-0.089,0c-2.534,0.036-4.791,1.609-5.704,3.975l-14.575,37.803
			l-23.907-109.971c-0.631-2.907-3.192-4.998-6.21-4.888c-2.973,0.07-5.48,2.237-5.976,5.17l-28.493,168.247L448.54,535.312
			c-0.57-2.725-2.883-4.736-5.66-4.923c-2.797-0.197-5.338,1.5-6.267,4.124l-15.689,44.338c0,0-66.648,0.787-97.313,1.15
			c1.502,4.237,3.119,8.437,4.846,12.593C359.067,592.594,425.311,592.593,425.311,592.593z"/>
                        </g>
                    </g>
                </svg>

            </div> */}

        </>
    )
}