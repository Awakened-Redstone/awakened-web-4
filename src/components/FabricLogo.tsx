export default function FabricLogo(props: {width?: number, height?: number, className?: string}) {
    const width = props.width ? props.width : 22.285715, height = props.height ? props.height : 24;

    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} viewBox="0 0 22.285715 24" version="1.1" className={props.className}>
            <path fill="currentColor" strokeWidth="0.0267858" d="M 6.8571435,23.142859 V 22.285716 H 6.0000007 5.1428578 V 21.428573 20.57143 H 4.2857145 3.4285716 V 19.714287 18.857144 H 2.5714288 1.7142856 V 18.000001 17.142859 H 0.85714284 0 V 15.428573 13.714287 H 0.85714284 1.7142856 V 12.857144 12.000002 H 2.5714288 3.4285716 V 11.142859 10.285717 H 4.2857145 5.1428578 V 9.4285736 8.5714303 H 6.0000007 6.8571435 V 7.7142875 6.8571445 h 0.8571429 0.857143 V 6.0000013 5.1428586 H 9.4285725 10.285715 V 3.4285727 1.7142869 H 11.142858 12 V 0.85714399 1.073846e-6 h 0.857143 0.857143 V 0.85714399 1.7142869 h 0.857143 0.857142 v 0.8571429 0.8571429 h 0.857143 0.857144 v 0.8571428 0.8571431 h 0.857143 0.857142 v 0.8571427 0.8571432 h 0.857143 0.857143 v 0.857143 0.8571428 h 0.857143 0.857143 v 1.7142867 1.714285 h -0.857143 -0.857143 v 0.857142 0.857143 h -1.714286 -1.714285 v 0.857142 0.857144 h -0.857144 -0.857143 v 0.857143 0.857143 h -0.857142 -0.857143 v 0.857142 0.857143 H 12.857143 12 v 1.714286 1.714286 h -0.857142 -0.857143 v 0.857143 0.857142 H 8.5714294 6.8571435 Z M 8.5714294,21.428573 V 20.57143 H 9.4285725 10.285715 V 19.714287 18.857144 H 11.142858 12 v -0.857143 -0.857142 h 0.857143 0.857143 v -0.857143 -0.857143 h 0.857143 0.857142 v -0.857144 -0.857142 h 0.857143 0.857144 v -1.714285 -1.714285 h 0.857143 0.857142 v 0.857142 0.857143 h 0.857143 0.857143 V 11.142859 10.285717 H 19.714286 18.857143 V 8.5714303 6.8571445 H 18.000001 17.142858 V 6.0000013 5.1428586 H 16.285714 15.428571 V 4.2857155 3.4285727 H 14.571429 13.714286 V 2.5714298 1.7142869 H 12.857143 12 V 3.4285727 5.1428586 H 11.142858 10.285715 V 6.0000013 6.8571445 H 9.4285725 8.5714294 v 0.857143 0.8571428 H 7.7142864 6.8571435 V 9.4285736 10.285717 H 6.0000007 5.1428578 v 0.857142 0.857143 H 4.2857145 3.4285716 v 0.857142 0.857143 H 2.5714288 1.7142856 v 1.714286 1.714286 h 0.8571432 0.8571428 v 0.857142 0.857143 h 0.8571429 0.8571433 v 0.857143 0.857143 h 0.8571429 0.8571428 v 0.857143 0.857143 h 0.8571429 0.857143 z M 15.428571,9.4285736 V 8.5714303 H 14.571429 13.714286 V 7.7142875 6.8571445 H 12.857143 12 V 6.0000013 5.1428586 h 0.857143 0.857143 v 0.8571427 0.8571432 h 0.857143 0.857142 v 0.857143 0.8571428 h 0.857143 0.857144 v 0.8571433 0.8571434 h -0.857144 -0.857143 z"/>
        </svg>
    )
}