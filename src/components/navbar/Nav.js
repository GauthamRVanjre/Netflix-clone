import React from 'react'
import './Nav.css'

const nav = () => {
  return (
    <nav>
      <section>
        <div className='nav-left'>
            <img className='nav-logo' alt='netflix logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAAB5CAMAAACZQJQkAAAAbFBMVEUAAADjCRTnCRTtCRUxAgTTCBPeCRNXBAiyBw/ICBEvAgTMCBKkBg5GAwaRBg3YCBNyBQk/AwV+BQsUAQKEBQxRAwfCCBENAAGZBg0kAQNfBAghAQNLAwarBw9mBAm9BxEbAQIpAgM3AgX1CRW8iuTbAAAEfUlEQVR4nO2Za4OqIBBAEZU031Zq9rDH//+PV2bwWW21d7a+zPmwC4bgURhQhGAYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGI2Totly631DlnBemLM+XcHiudG3bt4d384Kk9eO5TI7CCZanTWHQ7bftMYlUlruuqDWZWjc4FmFPuhCRsZfeJOyOJ26Lr2WGVtgdDqPk4bS7TB5MGrt2D9MH8EvlQ3ZrEKrSllLZnrII2I9UCMvqHEbbXWm1mB9vDVVs0npfN9UVDzenMCn73HZ3O4axkj79gHVcSKRFKqyVx0MrXuc7KmiDRypphrGYHtYsnu9TESlflLyEDTdsxpM8JFA8praz0G1ahDRkYZClUIReUVtIrH1jd7YHW8NPYatYDn1rVcNY10ulAdneOzsqynAdWSYc66GihII2nQFrFvZXqy1qvPatTgSpacNxlyKyw9VurpM4igw7/K0g5eGPxp2VnZcd90Wj7kpWIoXHVTg4HHN5EUp2VdB9YZfdOQquoz6PVLCi/YHXCtmOxUVA4J7ayZPYFK9FAtukG5lYQ0VtVH7QKHJNdoM1eUYZ1MbLyt194VltoUBYYbYjC+sjKsuovWIkKJxb4U1A5jaz08/+YVdcDRZR0N9Wy6R7V6Fmpu1bLeyfRWYmia1+ShXUxtrrW92bhxkP2T60sZSoKnlsN96ruFlvzm0Jk1QbYH1ZM9XOrrh73HSthdRPmRdARDsM1ccrHq9s/s6rM3aML652VhCuQa/GOlU1jtcGOqyJBCFjZsX67kd7pC1ZLnLICSiljlePqMns4rt7oge9FC3HEcaUoh5WxSnP4ty7mVirO15p80uijyF4ib1k1JlrE9Fb5TkE38G7mq7u3kG5tIVbmMcvmRCMEGCu8Bgkj95MrJvNipUvWgo7Oqr724+KTVst+xUS4Yh+sTkp+w2rdt2pJKiUxWOEHn09bbYNhEUC5ZOqt0m88K3xrVC6+ZZFJDVbnQL5nNZ+Ff7NmxxnY26McXbzorYZoNLGC9svzfnGsy6nVS89KNmEVx+v0WO+Xt1YR9r+1gEENHxmorfrvspNZ2CsCV2nGXyBftzJrE11TUIp5D8SltSqxAume6K1EFwVvVkyY+J3VEOLUjVWE39YrvdeiU9fZBgqJlXkn+Ok7+39YWcmN1RqasPXypfuERm+1ufesHllJOYkWepPmbSscTTD7mghM9Toystqabwh3rXD3wOBK2Y604RJyvyiKYBbuPHsAtsXmVmY5g90O1mpkS9yRlfmM1VsNu2yWSlw/HmLgJbu0DPnVdrfbbWf7GcssizZ1mq+r8OD5rnLBCrbq8Csn9jrfXAfEi4JmA3VitTfRAeeNoPHaqJyni2hH05Rml8dV6IX64lN4ht2EluH6gihejK1EcrUT36vw7WNZ/nDa/wE1Z2leHXzz4mx2fezDD2e9AewLS2O1+zuRp+TtlEi2L1w1YZwfnecF/5pVVOdx2NDsy+1OJNVQsSIcwwzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzyD/KTSI0RYZJEAAAAAElFTkSuQmCC'/>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/'>TV Shows</a>
                <a href='/'>TV Movies</a>
                <a href='/'>New and popular</a>
                <a href='/'>My List</a>
                <a href='/'>Browse by languages</a>
            </div>
        </div>
        <div className='nav-right'>
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z'
                fill='currentColor'
                ></path>
            </svg>
            <p>Children</p>
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z'
                fill='currentColor'
                ></path>
            </svg>
            <img
                className='nav_avatar'
                src='https://occ-0-2482-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
                alt='avatar'
            />
        
        </div>
      </section>
    </nav>
  )
}

export default nav
