import { CustomerService } from './../customers/customer.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from '../customers/customers.component';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  productCategory: string;
  quantity: number;
  price: string;
  gst: string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customer$: Observable<Customer>;
  loading: Boolean = true;

  customColumn = 'productCategory';
  defaultColumns = ['quantity', 'price', 'gst'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CustomerService,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>
  ) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
    this.customer$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCustomer(Number(params.get('id')))
      )
    );
  }

  goBackToCustomerPage() {
    this.router.navigate(['/customers']);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: {
        productCategory: 'Apple Products',
        quantity: 2,
        price: '$9200',
        gst: '$600',
      },
      children: [
        {
          data: {
            productCategory: 'iPhone 10',
            gst: '$200',
            price: '$3000',
            quantity: 1,
          },
        },
        {
          data: {
            productCategory: 'iPhone 10 MAX',
            gst: '$400',
            price: '6200',
            quantity: 2,
          },
        },
        {
          data: {
            productCategory: 'iMac Pro',
            gst: '$150',
            price: '$2300',
            quantity: 1,
          },
        },
      ],
    },
    {
      data: {
        productCategory: 'Samsung Products',
        gst: '$440',
        price: '$5000',
        quantity: 2,
      },
      children: [
        {
          data: {
            productCategory: 'Samsung TV 2020',
            gst: '$220',
            price: '$4200',
            quantity: 1,
          },
        },
        {
          data: {
            productCategory: 'Samsung Galaxy S9',
            gst: '$220',
            price: '$3000',
            quantity: 1,
          },
        },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }
}
