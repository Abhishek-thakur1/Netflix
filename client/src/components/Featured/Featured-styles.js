import styled from "styled-components";

export const Wrapper = styled.div`
    height: 90vh;
    position: relative;
    

    img{
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        object-fit: cover;
    }
`;
export const Info = styled.div`
    width: 35%;
    position: absolute;
    left: 50px;
    bottom: 100px;
    display: flex;
    flex-direction: column;
    color: var(--white);

    img{
        width: 40rem;
    }

    span{
        margin: 1rem 0rem;
        font-size: 1.6rem;
        color: #fff;
    }
`;
export const Buttons = styled.div`
    display: flex;

    button{
        padding: .7rem 2.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 10px;
        margin-right: 2rem;
        cursor: pointer;
        font-size: 1.8rem;
        font-weight: 500;

        &.play{
            background-color: var(--red);

            .play-icon{
                font-size: 2rem;
                color: #fff;
            }
            span{
                color: #fff;
                margin-left: .5rem;
                font-size: 1.6rem;
            }
        }
        &.more{
            background: color #c7c7c7;

            .info-icon{
                font-size: 2rem;
                color: var(--main-color);
            }
            span{
                color: var(--main-color);
                margin-left: .5rem;
                font-size: 1.6rem;
            }
        }
    }

`;