import React from 'react'

const GithubIcon = ({dark}) => {
    return (
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-[5px]">
        <path d="M10 2.57834C5.39584 2.57834 1.66667 6.30751 1.66667 10.9117C1.66573 12.6611 2.21568 14.3663 3.23852 15.7856C4.26135 17.2048 5.70513 18.2659 7.36501 18.8183C7.78167 18.8908 7.93751 18.6408 7.93751 18.4217C7.93751 18.2242 7.92667 17.5683 7.92667 16.87C5.83334 17.2558 5.29167 16.36 5.12501 15.8908C5.03084 15.6508 4.62501 14.9117 4.27084 14.7133C3.97917 14.5575 3.56251 14.1717 4.26001 14.1617C4.91667 14.1508 5.38501 14.7658 5.54167 15.0158C6.29167 16.2758 7.49001 15.9217 7.96834 15.7033C8.04167 15.1617 8.26001 14.7975 8.50001 14.5892C6.64584 14.3808 4.70834 13.6617 4.70834 10.4742C4.70834 9.56751 5.03084 8.81834 5.56251 8.23417C5.47917 8.02584 5.18751 7.17167 5.64584 6.02584C5.64584 6.02584 6.34334 5.80751 7.93751 6.88084C8.61589 6.69256 9.31681 6.59779 10.0208 6.59917C10.7292 6.59917 11.4375 6.69251 12.1042 6.88001C13.6975 5.79667 14.3958 6.02667 14.3958 6.02667C14.8542 7.17251 14.5625 8.02667 14.4792 8.23501C15.01 8.81834 15.3333 9.55751 15.3333 10.4742C15.3333 13.6725 13.3858 14.3808 11.5317 14.5892C11.8333 14.8492 12.0942 15.3492 12.0942 16.1308C12.0942 17.245 12.0833 18.1408 12.0833 18.4225C12.0833 18.6408 12.24 18.9008 12.6567 18.8175C14.3109 18.259 15.7483 17.1958 16.7666 15.7776C17.7849 14.3594 18.3329 12.6576 18.3333 10.9117C18.3333 6.30751 14.6042 2.57834 10 2.57834Z" fill={dark ? "white" : "black"}/>
        </svg>
    )
}

export default GithubIcon
