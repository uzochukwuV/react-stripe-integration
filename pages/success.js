export default function (){
    return <>
        <h1>
            Your payment <br/> was Sucessfull 
        </h1>

        <style jsx>{`
                body {
                    text-align: center;
                    background-color: black;

                }

                h1 {
                    margin: 0 auto;
                    height: 200px;
                    width: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: blue;
                    font-size: 24px;
                    font-weight: 600;
                    animation: borderRace 3s 2s ease;
                    border-radius : 50%;
                    transition: border 2s ease;
                    color: white;
                }

                @keyframes borderRace {
                    0% {
                        border-top: 4px solid black;
                    }
                    25% {
                        border-top: 4px solid black;
                        border-right: 4px solid black;
                    }
                    50% {
                        border-top: 4px solid black;
                        border-right: 4px solid black;
                        border-bottom: 4px solid black;
                    }
                    75% {
                        border: 4px solid black;
                    }
                    100% {
                        border: 2px solid white;
                    }
                }


        `}</style>
    </>
}