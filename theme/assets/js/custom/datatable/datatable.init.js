"use strict";

var defaults =
{
   // dom: `<'row'<'col-sm-12'tr>>
			//<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

   // lengthMenu: [5, 10, 25, 50, 100],

   pageLength: 10,

   // //responsive: true,

	serverSide: true,

	//ordering: true,

    processing: false,

   // searching: false,

   // paging: 'page',

   // deferRender: true,
};

$.extend(true, $.fn.dataTable.defaults, defaults);
