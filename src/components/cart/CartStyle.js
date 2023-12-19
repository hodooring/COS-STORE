import styled from 'styled-components';

export const CartListWrap = styled.div`
  .cart {margin-bottom: 20px; font-size: 14px; font-weight: 500; }
  .cart-list {width: 100%;
    article {
      position: relative; display: flex; border-top: 1px solid #dcdcdc; border-bottom: 1px solid #dcdcdc; padding: 30px; justify-content: start;
      label {
        input {
          margin-right: 20px; position: absolute; top: 45%; }
      }
      img {
        width: 150px; margin-left: 40px;
      }
      .productbox {
        font-size: 13px; padding: 10px;
        .product {}
        .info {
          padding-top: 30px; width: 200px;
          .size_section {
            .size_label {
              display: inline-block; width: 70px;
            }
          }
          .color_section {
            .color_label { display: inline-block; width: 70px;
            }
          }
          .quantity_section {
            .quantity_label { display: inline-block; width: 60px;
            }
          }
          .totalprice_section { margin-top: 30px;
            .totalprice_label { display:inline-block; width: 50px;
            }
        }
        }
      }
      .delbox {
        button {
          width: 50px; color: #000; background: #fff; position: absolute; top: 50%; right: 5%;
        }
      }
    }
  }
  .cart-bottom{
    h3 {font-size: 14px; margin: 20px 0; font-weight: 500;
    }
  }
  .summary{
    border-top: 1px solid #dcdcdc; border-bottom: 1px solid #dcdcdc; padding: 30px; font-size: 13px;
    .total_section {
            .total_label {
              display: inline-block; width: 90px;
            }
          }
          .fee_section {
            .fee_label { display: inline-block; width: 90px;
            }
          }
          .totalcnt_section {
            .totalcnt_label { display: inline-block; width: 90px;
            }
          }
  }
  .goshopping {margin-top: 20px; 
    button {font-size: 14px; background: #fff; font-weight: 600;}
    }
`;

export const CartEmptyWrap = styled.div`
  background: #efefef;
  .inner {}
  .h2 {}
  .cart-empty { text-align: center; margin-top: 200px;
    h2 {font-size: 60px; margin-bottom: 100px;
    }
    a {width: 250px; background: #000; display: inline-block; height: 50px;
      line-height: 50px; color: #fff;
    }
  }
`;
