import React from "react"

const Loading = () => {
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 1.66669C10.221 1.66669 10.433 1.75448 10.5893 1.91076C10.7455 2.06704 10.8333 2.27901 10.8333 2.50002V5.00002C10.8333 5.22103 10.7455 5.433 10.5893 5.58928C10.433 5.74556 10.221 5.83335 10 5.83335C9.77899 5.83335 9.56703 5.74556 9.41075 5.58928C9.25447 5.433 9.16667 5.22103 9.16667 5.00002V2.50002C9.16667 2.27901 9.25447 2.06704 9.41075 1.91076C9.56703 1.75448 9.77899 1.66669 10 1.66669ZM10 14.1667C10.221 14.1667 10.433 14.2545 10.5893 14.4108C10.7455 14.567 10.8333 14.779 10.8333 15V17.5C10.8333 17.721 10.7455 17.933 10.5893 18.0893C10.433 18.2456 10.221 18.3334 10 18.3334C9.77899 18.3334 9.56703 18.2456 9.41075 18.0893C9.25447 17.933 9.16667 17.721 9.16667 17.5V15C9.16667 14.779 9.25447 14.567 9.41075 14.4108C9.56703 14.2545 9.77899 14.1667 10 14.1667ZM18.3333 10C18.3333 10.221 18.2455 10.433 18.0893 10.5893C17.933 10.7456 17.721 10.8334 17.5 10.8334H15C14.779 10.8334 14.567 10.7456 14.4107 10.5893C14.2545 10.433 14.1667 10.221 14.1667 10C14.1667 9.77901 14.2545 9.56705 14.4107 9.41077C14.567 9.25449 14.779 9.16669 15 9.16669H17.5C17.721 9.16669 17.933 9.25449 18.0893 9.41077C18.2455 9.56705 18.3333 9.77901 18.3333 10ZM5.83334 10C5.83334 10.221 5.74554 10.433 5.58926 10.5893C5.43298 10.7456 5.22102 10.8334 5.00001 10.8334H2.50001C2.27899 10.8334 2.06703 10.7456 1.91075 10.5893C1.75447 10.433 1.66667 10.221 1.66667 10C1.66667 9.77901 1.75447 9.56705 1.91075 9.41077C2.06703 9.25449 2.27899 9.16669 2.50001 9.16669H5.00001C5.22102 9.16669 5.43298 9.25449 5.58926 9.41077C5.74554 9.56705 5.83334 9.77901 5.83334 10ZM15.8925 15.8925C15.7362 16.0487 15.5243 16.1365 15.3033 16.1365C15.0824 16.1365 14.8704 16.0487 14.7142 15.8925L12.9467 14.125C12.7949 13.9679 12.7109 13.7574 12.7128 13.5389C12.7147 13.3204 12.8023 13.1113 12.9568 12.9568C13.1113 12.8023 13.3203 12.7147 13.5388 12.7128C13.7573 12.7109 13.9678 12.7949 14.125 12.9467L15.8925 14.7134C15.97 14.7907 16.0315 14.8827 16.0734 14.9838C16.1153 15.085 16.1369 15.1934 16.1369 15.3029C16.1369 15.4125 16.1153 15.5209 16.0734 15.6221C16.0315 15.7232 15.97 15.8151 15.8925 15.8925ZM7.05334 7.05335C6.89707 7.20958 6.68514 7.29734 6.46417 7.29734C6.2432 7.29734 6.03128 7.20958 5.87501 7.05335L4.10834 5.28669C3.95197 5.13043 3.86408 4.91846 3.864 4.6974C3.86392 4.47634 3.95167 4.2643 4.10792 4.10794C4.26418 3.95157 4.47615 3.86368 4.69721 3.8636C4.91827 3.86352 5.1303 3.95126 5.28667 4.10752L7.05334 5.87502C7.20956 6.03129 7.29733 6.24322 7.29733 6.46419C7.29733 6.68516 7.20956 6.89708 7.05334 7.05335ZM4.10834 15.8925C3.95211 15.7362 3.86435 15.5243 3.86435 15.3034C3.86435 15.0824 3.95211 14.8705 4.10834 14.7142L5.87584 12.9467C5.95271 12.8671 6.04466 12.8036 6.14634 12.7599C6.248 12.7163 6.35735 12.6933 6.468 12.6923C6.57865 12.6913 6.68839 12.7124 6.7908 12.7543C6.89321 12.7962 6.98626 12.8581 7.0645 12.9364C7.14275 13.0146 7.20462 13.1076 7.24652 13.2101C7.28842 13.3125 7.30951 13.4222 7.30855 13.5329C7.30759 13.6435 7.2846 13.7529 7.24092 13.8545C7.19725 13.9562 7.13376 14.0481 7.05417 14.125L5.28751 15.8925C5.21011 15.97 5.1182 16.0315 5.01704 16.0734C4.91587 16.1153 4.80743 16.1369 4.69792 16.1369C4.58841 16.1369 4.47997 16.1153 4.3788 16.0734C4.27764 16.0315 4.18573 15.97 4.10834 15.8925ZM12.9467 7.05335C12.7904 6.89708 12.7027 6.68516 12.7027 6.46419C12.7027 6.24322 12.7904 6.03129 12.9467 5.87502L14.7133 4.10752C14.8696 3.95115 15.0816 3.86326 15.3026 3.86318C15.5237 3.86311 15.7357 3.95085 15.8921 4.1071C16.0485 4.26336 16.1363 4.47533 16.1364 4.69639C16.1365 4.91745 16.0488 5.12949 15.8925 5.28585L14.125 7.05335C13.9687 7.20958 13.7568 7.29734 13.5358 7.29734C13.3149 7.29734 13.1029 7.20958 12.9467 7.05335Z" fill="white"/>
        </svg>
    )
}

export default Loading