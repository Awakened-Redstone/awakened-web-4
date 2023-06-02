export default function Logo(props: { width?: number | string, height?: number | string, className?: string }) {
    const width = props.width ? props.width : 180, height = props.height ? props.height : 15;

    return (
        <svg width={width} height={height} viewBox="0 0 180 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g transform="scale(1.0028073,1.0227274)">
                <g transform="matrix(0.01111111,0,0,0.01111111,-2.6666664,-3.9999996)">
                    <image width="1435.969" height="1408" preserveAspectRatio="none"
    xlinkHref="data:image/png;base64,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
    "
    id="image309"
    x="240"
    y="316" /></g>
                <g aria-label="Awakened Redstone" transform="scale(1.006278,0.99376117)" fill="currentColor"><path
    d="m 29.385155,12.552789 h -2.679788 l -0.69526,-2.03178 h -3.726054 l -0.69526,2.03178 H 18.976505 L 22.689059,2.5018936 h 2.983543 z M 25.382348,8.6782328 24.14708,5.0736807 22.911812,8.6782328 Z"
    id="path415" />
                    <path
                        d="M 42.784098,4.9724292 40.435065,12.552789 H 37.856527 L 36.310755,7.4429649 34.791983,12.552789 H 32.179695 L 29.850912,4.9724292 h 2.551537 l 1.296018,5.2245758 1.620024,-5.2245758 h 2.153281 l 1.539022,5.2245758 1.275768,-5.2245758 z"
                        id="path417"/>
                    <path
                        d="M 48.825435,10.57501 V 8.9954874 Q 48.332678,9.0359879 47.75892,9.110239 47.185162,9.17774 46.888157,9.2722414 46.523652,9.386993 46.327899,9.6097462 q -0.189002,0.2160031 -0.189002,0.5737588 0,0.236253 0.0405,0.384755 0.0405,0.148502 0.202503,0.283504 0.155252,0.135002 0.371255,0.202503 0.216004,0.06075 0.67501,0.06075 0.364505,0 0.735761,-0.148502 0.378005,-0.148502 0.661509,-0.391506 z m 0,1.174517 q -0.195752,0.148502 -0.486007,0.357755 -0.290254,0.209253 -0.546758,0.330755 -0.357755,0.162002 -0.74251,0.236253 -0.384756,0.081 -0.843762,0.081 -1.080016,0 -1.809027,-0.66826 -0.72901,-0.66826 -0.72901,-1.707775 0,-0.8302617 0.371255,-1.3567693 0.371256,-0.5265076 1.053015,-0.8302619 0.67501,-0.3037544 1.674025,-0.4320063 0.999014,-0.1282518 2.07228,-0.1890027 v -0.040501 q 0,-0.6277591 -0.513008,-0.8640125 -0.513007,-0.2430035 -1.512022,-0.2430035 -0.600758,0 -1.282518,0.2160031 -0.68176,0.209253 -0.978764,0.3240047 H 44.32987 V 5.1344316 q 0.384756,-0.1012515 1.248768,-0.2362534 0.870763,-0.1417521 1.741526,-0.1417521 2.07228,0 2.990293,0.6412593 0.924763,0.6345092 0.924763,1.9980288 v 5.1570748 h -2.409785 z"
                        id="path419"/>
                    <path
                        d="M 61.51562,12.552789 H 58.687329 L 56.561048,9.2519911 55.899539,10.055253 v 2.497536 H 53.469504 V 2.049637 h 2.430035 v 6.2708406 l 2.619038,-3.3480484 h 2.80129 l -2.727039,3.2670472 z"
                        id="path421"/>
                    <path
                        d="m 70.209747,9.2114905 h -5.56208 q 0.054,0.8910125 0.675009,1.3635195 0.627759,0.472507 1.842777,0.472507 0.769511,0 1.491771,-0.276754 0.722261,-0.276754 1.140767,-0.594009 h 0.270004 v 1.950779 q -0.823512,0.330754 -1.552523,0.479257 -0.72901,0.148502 -1.613273,0.148502 -2.281533,0 -3.49655,-1.026015 -1.215018,-1.026015 -1.215018,-2.9227924 0,-1.8765271 1.147517,-2.9700429 1.154266,-1.1002659 3.159045,-1.1002659 1.849527,0 2.78104,0.9382636 0.931514,0.9315134 0.931514,2.6865388 z M 67.793212,7.7872199 Q 67.772962,7.0244589 67.415207,6.6397033 67.057451,6.2549478 66.30144,6.2549478 q -0.70201,0 -1.154266,0.3645052 -0.452257,0.3645053 -0.506258,1.1677669 z"
                        id="path423"/>
                    <path
                        d="M 79.538379,12.552789 H 77.094844 V 8.7929844 q 0,-0.4590066 -0.04725,-0.9112631 -0.04725,-0.4590067 -0.162002,-0.6750098 -0.135002,-0.2497536 -0.398256,-0.3645052 -0.256504,-0.1147517 -0.72226,-0.1147517 -0.330755,0 -0.67501,0.1080016 -0.337505,0.1080015 -0.735761,0.3442549 V 12.552789 H 71.924269 V 4.9724292 h 2.430035 v 0.8370121 q 0.64801,-0.5062573 1.242018,-0.7762612 0.600759,-0.2700039 1.329769,-0.2700039 1.228518,0 1.917028,0.7155104 0.69526,0.7155103 0.69526,2.1397809 z"
                        id="path425"/>
                    <path
                        d="m 89.238269,9.2114905 h -5.56208 q 0.054,0.8910125 0.67501,1.3635195 0.627759,0.472507 1.842776,0.472507 0.769512,0 1.491772,-0.276754 0.72226,-0.276754 1.140766,-0.594009 h 0.270004 v 1.950779 q -0.823512,0.330754 -1.552522,0.479257 -0.729011,0.148502 -1.613273,0.148502 -2.281533,0 -3.496551,-1.026015 -1.215017,-1.026015 -1.215017,-2.9227924 0,-1.8765271 1.147516,-2.9700429 1.154267,-1.1002659 3.159046,-1.1002659 1.849526,0 2.78104,0.9382636 0.931513,0.9315134 0.931513,2.6865388 z M 86.821734,7.7872199 q -0.02025,-0.762761 -0.378005,-1.1475166 -0.357755,-0.3847555 -1.113766,-0.3847555 -0.70201,0 -1.154267,0.3645052 -0.452256,0.3645053 -0.506257,1.1677669 z"
                        id="path427"/>
                    <path
                        d="m 98.323902,12.552789 h -2.430035 v -0.789762 q -0.627759,0.513008 -1.174517,0.756011 -0.546758,0.243004 -1.262268,0.243004 -1.38377,0 -2.214032,-1.066516 -0.830262,-1.066515 -0.830262,-2.8755412 0,-0.9652639 0.276754,-1.7077746 0.283504,-0.7492609 0.769511,-1.2825186 0.459006,-0.5062573 1.113766,-0.7830113 0.654759,-0.2835041 1.309519,-0.2835041 0.68176,0 1.113766,0.1485022 0.438756,0.141752 0.897763,0.3645052 V 2.049637 h 2.430035 z m -2.430035,-2.09253 V 6.7409548 q -0.256504,-0.1080016 -0.540008,-0.1552523 -0.283504,-0.047251 -0.519758,-0.047251 -0.958513,0 -1.43777,0.6007586 -0.479257,0.5940086 -0.479257,1.6537739 0,1.1137661 0.384755,1.6200236 0.384756,0.499507 1.235268,0.499507 0.330755,0 0.70201,-0.121502 0.371256,-0.128252 0.65476,-0.330754 z"
                        id="path429"/>
                    <path
                        d="m 111.11533,5.579938 q 0,-0.3780054 -0.15525,-0.6480093 -0.15525,-0.2700039 -0.53326,-0.4252562 -0.26325,-0.1080015 -0.61426,-0.1282518 -0.351,-0.027 -0.81676,-0.027 h -0.93826 v 2.7067891 h 0.79651 q 0.62101,0 1.03952,-0.060751 0.4185,-0.060751 0.70201,-0.276754 0.27,-0.209253 0.3915,-0.4590066 0.12825,-0.2565037 0.12825,-0.6817599 z m 4.04331,6.972851 h -3.16579 l -2.74054,-3.6855535 h -1.19477 V 12.552789 H 105.479 V 2.5018936 h 4.34706 q 0.89102,0 1.53228,0.1012514 0.64126,0.1012515 1.20151,0.4387564 0.56701,0.3375048 0.89777,0.8775126 0.3375,0.5332577 0.3375,1.3432694 0,1.1137661 -0.51976,1.8157763 -0.513,0.7020101 -1.47152,1.1677668 z"
                        id="path431"/>
                    <path
                        d="m 123.62327,9.2114905 h -5.56208 q 0.054,0.8910125 0.67501,1.3635195 0.62776,0.472507 1.84277,0.472507 0.76951,0 1.49178,-0.276754 0.72226,-0.276754 1.14076,-0.594009 h 0.27001 v 1.950779 q -0.82352,0.330754 -1.55253,0.479257 -0.72901,0.148502 -1.61327,0.148502 -2.28153,0 -3.49655,-1.026015 -1.21502,-1.026015 -1.21502,-2.9227924 0,-1.8765271 1.14752,-2.9700429 1.15427,-1.1002659 3.15904,-1.1002659 1.84953,0 2.78104,0.9382636 0.93152,0.9315134 0.93152,2.6865388 z m -2.41654,-1.4242706 q -0.0202,-0.762761 -0.378,-1.1475166 -0.35776,-0.3847555 -1.11377,-0.3847555 -0.70201,0 -1.15427,0.3645052 -0.45225,0.3645053 -0.50625,1.1677669 z"
                        id="path433"/>
                    <path
                        d="m 132.7089,12.552789 h -2.43004 v -0.789762 q -0.62776,0.513008 -1.17452,0.756011 -0.54675,0.243004 -1.26226,0.243004 -1.38377,0 -2.21404,-1.066516 -0.83026,-1.066515 -0.83026,-2.8755412 0,-0.9652639 0.27676,-1.7077746 0.2835,-0.7492609 0.76951,-1.2825186 0.459,-0.5062573 1.11376,-0.7830113 0.65476,-0.2835041 1.30952,-0.2835041 0.68176,0 1.11377,0.1485022 0.43875,0.141752 0.89776,0.3645052 V 2.049637 h 2.43004 z m -2.43004,-2.09253 V 6.7409548 q -0.2565,-0.1080016 -0.54001,-0.1552523 -0.2835,-0.047251 -0.51975,-0.047251 -0.95852,0 -1.43777,0.6007586 -0.47926,0.5940086 -0.47926,1.6537739 0,1.1137661 0.38475,1.6200236 0.38476,0.499507 1.23527,0.499507 0.33076,0 0.70201,-0.121502 0.37126,-0.128252 0.65476,-0.330754 z"
                        id="path435"/>
                    <path
                        d="m 141.59203,10.149754 q 0,1.174517 -1.05301,1.896777 -1.05302,0.715511 -2.8823,0.715511 -1.01251,0 -1.83602,-0.189003 -0.82351,-0.189003 -1.32302,-0.418506 v -1.998029 h 0.22275 q 0.18225,0.128252 0.41851,0.283504 0.243,0.148502 0.68176,0.324005 0.378,0.155252 0.85726,0.270004 0.47926,0.108001 1.02601,0.108001 0.71551,0 1.05977,-0.155252 0.34425,-0.162002 0.34425,-0.472507 0,-0.276754 -0.2025,-0.398255 -0.2025,-0.1282523 -0.76951,-0.243004 -0.27,-0.060751 -0.73576,-0.1282518 -0.45901,-0.074251 -0.83701,-0.1755026 -1.03277,-0.2700039 -1.53227,-0.837012 -0.49951,-0.5737583 -0.49951,-1.4242706 0,-1.0935158 1.03276,-1.8157762 1.03952,-0.7290106 2.83504,-0.7290106 0.85052,0 1.62678,0.1755026 0.78301,0.1687524 1.22177,0.3645052 v 1.9170277 h -0.20926 q -0.54001,-0.3712554 -1.23527,-0.6007587 -0.68851,-0.2362534 -1.39727,-0.2362534 -0.58725,0 -0.99226,0.1620024 -0.39826,0.1620023 -0.39826,0.4590066 0,0.2700039 0.18226,0.4117559 0.18225,0.1417521 0.85726,0.2835041 0.37125,0.074251 0.79651,0.1485022 0.43201,0.067501 0.86401,0.1755025 0.95852,0.2497536 1.41752,0.7897614 0.45901,0.5332577 0.45901,1.3365193 z"
                        id="path437"/>
                    <path
                        d="m 148.05187,12.485288 q -0.39151,0.101251 -0.83026,0.155252 -0.43876,0.06075 -1.07327,0.06075 -1.41752,0 -2.11278,-0.573758 -0.68851,-0.573759 -0.68851,-1.964279 V 6.619453 h -0.99901 V 4.9724292 h 0.99901 V 2.8056479 h 2.43003 v 2.1667813 h 2.27479 V 6.619453 h -2.27479 v 2.6865388 q 0,0.3982558 0.007,0.6952602 0.007,0.297004 0.108,0.533258 0.0945,0.236253 0.33075,0.378005 0.243,0.135002 0.70201,0.135002 0.189,0 0.49276,-0.081 0.3105,-0.081 0.432,-0.148502 h 0.20251 z"
                        id="path439"/>
                    <path
                        d="m 157.25225,8.765984 q 0,1.869777 -1.09351,2.949793 -1.08677,1.073265 -3.0578,1.073265 -1.97102,0 -3.06454,-1.073265 -1.08677,-1.080016 -1.08677,-2.949793 0,-1.8832772 1.09352,-2.9565427 1.10027,-1.0732655 3.05779,-1.0732655 1.98453,0 3.06455,1.0800156 1.08676,1.0800156 1.08676,2.9497926 z m -2.99029,1.842777 q 0.23625,-0.290255 0.35101,-0.6952604 0.1215,-0.4117559 0.1215,-1.1340164 0,-0.6682596 -0.1215,-1.1205162 -0.12151,-0.4522565 -0.33751,-0.7222604 -0.216,-0.276754 -0.51976,-0.3915056 -0.30375,-0.1147517 -0.65476,-0.1147517 -0.351,0 -0.62776,0.094501 -0.27,0.094501 -0.51975,0.3780054 -0.22276,0.2632538 -0.35776,0.7222605 -0.12825,0.4590066 -0.12825,1.1542666 0,0.621009 0.11475,1.0800156 0.11475,0.4522562 0.33751,0.7290102 0.216,0.263254 0.513,0.384756 0.30376,0.121502 0.68851,0.121502 0.33076,0 0.62776,-0.108002 0.30376,-0.114752 0.51301,-0.378005 z"
                        id="path441"/>
                    <path
                        d="m 166.60788,12.552789 h -2.44353 V 8.7929844 q 0,-0.4590066 -0.0473,-0.9112631 -0.0472,-0.4590067 -0.16201,-0.6750098 -0.135,-0.2497536 -0.39825,-0.3645052 -0.2565,-0.1147517 -0.72226,-0.1147517 -0.33076,0 -0.67501,0.1080016 -0.33751,0.1080015 -0.73576,0.3442549 v 5.3730779 h -2.43004 V 4.9724292 h 2.43004 v 0.8370121 q 0.64801,-0.5062573 1.24202,-0.7762612 0.60075,-0.2700039 1.32977,-0.2700039 1.22851,0 1.91702,0.7155104 0.69526,0.7155103 0.69526,2.1397809 z"
                        id="path443"/>
                    <path
                        d="m 176.30778,9.2114905 h -5.56208 q 0.054,0.8910125 0.67501,1.3635195 0.62776,0.472507 1.84278,0.472507 0.76951,0 1.49177,-0.276754 0.72226,-0.276754 1.14077,-0.594009 h 0.27 v 1.950779 q -0.82351,0.330754 -1.55252,0.479257 -0.72901,0.148502 -1.61327,0.148502 -2.28154,0 -3.49655,-1.026015 -1.21502,-1.026015 -1.21502,-2.9227924 0,-1.8765271 1.14752,-2.9700429 1.15426,-1.1002659 3.15904,-1.1002659 1.84953,0 2.78104,0.9382636 0.93151,0.9315134 0.93151,2.6865388 z m -2.41653,-1.4242706 q -0.0203,-0.762761 -0.37801,-1.1475166 -0.35775,-0.3847555 -1.11376,-0.3847555 -0.70201,0 -1.15427,0.3645052 -0.45226,0.3645053 -0.50626,1.1677669 z"
                        id="path445"/></g></g></svg>
    )
}