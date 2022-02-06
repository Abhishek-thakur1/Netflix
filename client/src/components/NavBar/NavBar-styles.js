import styled from 'styled-components'

export const Wrapper = styled.div`
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,0) 0%, rgba(14,14,14,1) 100%);
    color: var(--white);
    font-size: 1.6rem;
    width: 100%;
    position: fixed;
    top:0;
    z-index: 1000;
    transition: all 0.25s ease-in;

    &.dark{
        background-color: var(--main-color);
    }
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 5rem;
    height: 6rem;
`;
export const Left = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    img{
        height: 7rem;
        margin-right: 5rem;
        cursor: pointer;
    }
    .close{
        position: absolute;
        right: 3rem;
        top: 2rem;
        font-size: 3.5rem;
        font-weight: 500;
        z-index: 10000;
        cursor: pointer;
        /* display:none; */
    }

    @media only screen and (max-width: 768px){
        img{
            margin-left: -2rem;
        }
    }
`;
export const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    /* transition: all 1s ease-in; */


    @media only screen and (max-width: 768px){
            flex-direction: column;
            position: fixed;
            top: 0;
            right: 0;
            background-color: rgba(0,0,0,0.97);
            /* clip-path: polygon(0 2%, 100% 0%, 100% 100%, 0 99%); */
            width: 60%;
            height: 100vh;
            transform: translateX(100%);
            transition: transform .3s;
            will-change: transform;

            

            &.show {
                transform: translateX(0%);
                
            }
        }
`;
export const Item = styled.li`
    font-size:1.6rem;
    margin-left: 2.1rem;
    font-weight: 500;
    letter-spacing:0.05rem;
    cursor: pointer;
    user-select: none;

    @media only screen and (max-width: 768px){
        font-size: 2.3rem;
        margin-bottom: 3.1rem;
        padding: .7rem 1.7rem;
        text-align: center;
        width: 80%;

        &:hover {
            background-color: var(--dark-grey);
            border-radius: 0.3rem;
        }

        &:last-child {
            margin-top:5rem;
            background-color: #e50914;
            line-height: normal;
            padding: .7rem 1.7rem;
            font-weight: 400;
            font-size: 2.3rem;
            border-radius: .3rem;
            /* width: auto; */
        }
    }
`;
export const Right = styled.div`
    display: flex; 
    align-items: center;

    .icon{
        font-size: 2rem;
        margin: 0rem 1.5rem;
        cursor: pointer;
    }
    span{
        font-weight: 500;
        letter-spacing:0.01rem;
        cursor: pointer;
        user-select: none;
    }

    img{
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px){
        margin-right:-2rem;
        .icon{
            font-size: 2.55rem;
            margin-right: 2rem;
        }

        span{
            font-size: 2.2rem;
        }
    }
`;

export const Profile = styled.div`
    transition: all 4s;

    .icon{
        margin-top: 1rem;
        margin-left: 0.2rem;
    }

    .options{
        display: none;
        background-color: var(--main-color);
        border-radius: .7rem;
        

        span{
            font-size: 1.5rem;
            padding: .5rem 1rem;
            cursor: pointer;

            &:hover{
                background-color: var(--dark-grey);
                border-radius: .7rem;
            }
        }
    }
    
    &:hover{
        .options{
            display: flex;
            flex-direction: column;
            position: absolute;
            
        }
    }
`;