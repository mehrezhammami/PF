import React, { Component } from "react";
import { MDBRow, MDBCard, MDBCardBody, MDBTooltip, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBBtn } from "mdbreact";
import Axios from "axios"

class Cart extends Component {
state = {
  data: [
      {
        src: this.props.Image,
        Nom: this.props.Name,
        Category: this.props.Category,
        Reference: this.props.Reference,
        prix: this.props.prix,
        quantité: "2"
      }
    ],
    columns: [
      {
        label: '',
        field: 'Image',
      },
      {
        label: <strong>Nom du produit</strong>,
        field: 'Name'
      },
      {
        label: <strong>Category</strong>,
        field: 'Category'
      },
      {
        label: <strong>Reference</strong>,
        field: 'Reference'
      },
      {
        label: <strong>Quantité</strong>,
        field: 'Quantity'
      },
      {
        label: <strong>Prix</strong>,
        field: 'Prix'
      },
      {
        label: <strong>Somme</strong>,
        field: 'Somme'
      },
      {
        label: '',
        field: 'button'
      }
     
  ]
}

render() {

    const rows = [];
    const { columns, data } = this.state;

    data.map(row => {
      return rows.push(
        {
        'img': <img src={row.src} alt="" className="img-fluid z-depth-0" />,
        'product': [<h5 className="mt-3" key={new Date().getDate + 1}><strong>{row.title}</strong></h5>, <p key={new
          Date().getDate} className="text-muted">{row.subTitle}</p>],
        'color': row.color,
        'price': `$${row.price}`,
        'qty':
        <MDBInput type="number" default={row.qty} className="form-control" style={{ width: "100px" }} />,
        'amount': <strong>${row.qty * row.price}</strong>,
        'button':
        <MDBTooltip placement="top">
            <MDBBtn color="primary" size="sm">
                X
            </MDBBtn>
            <div>Remove item</div>
        </MDBTooltip>
        }
      )
    });

    return (
    <MDBRow className="my-2" center>
      <MDBCard className="w-100">
        <MDBCardBody>
          <MDBTable className="product-table">
            <MDBTableHead className="font-weight-bold" color="mdb-color lighten-5" columns={columns} />
            <MDBTableBody rows={rows} />
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </MDBRow>
    );
  }
}

export default Cart;