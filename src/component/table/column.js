import { Link } from "react-router-dom"

export const RegisteredTruckColumn = [
    {
        Header: 'Plate Number',
        accessor: 'truckNumber'
    },
    {
        Header: 'Transporter',
        accessor: 'transporter'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },
    {
        Header: 'Status',
        accessor: 'status'
    }

]



export const ChartTruckColumn = [
    {
        Header: 'Plate Number',
        accessor: 'truckNumber'
    },
    {
        Header: 'Transporter',
        accessor: 'transporter'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },

    {
        Header: 'Expiring Date',
        accessor: 'calibrationValidity'
    },
    {
        Header: 'Status',
        accessor: 'blacklists_aggregate'

    },
    {
        Header: 'View',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard${value}`}>View Chart</Link>

    }

]



export const ChartTankColumn = [
 
    {
        Header: 'Tank Number',
        accessor: 'truckNumber'

    },
    {
        Header: 'station',
        accessor: 'station'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },

    {
        Header: 'Expiring Date',
        accessor: 'validationDuration'
    },
    {
        Header: 'Status',
        accessor: 'status'

    },
    {
        Header: 'View',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard${value}`}>View Chart</Link>

    }

]


export const FacilityTruckColumn = [
    {
        Header: 'Plate Number',
        accessor: 'truckNumber'
    },
    {
        Header: 'Transporter',
        accessor: 'transporter'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },

    {
        Header: 'Expiring Date',
        accessor: 'calibrationValidity'
    },
    {
        Header: 'Status',
        accessor: 'blacklists_aggregate'

    }
]

export const StationColumn = [
    {
        Header: 'Station Name',
        accessor: 'station'
    },
    {
        Header: 'Station Email',
        accessor: 'email'

    },
    {
        Header: 'Station Address',
        accessor: 'location'
    },
    {
        Header: 'Outlet Manager',
        accessor: 'outletManager'
    }
]


export const DepotColumn = [
    {
        Header: 'Depot Name',
        accessor: 'name'
    },
    {
        Header: 'Station Address',
        accessor: 'address'

    },
    {
        Header: 'Station State',
        accessor: 'state'
    }
]



export const FacilityTankColumn = [
 
    {
        Header: 'Truck Number',
        accessor: 'truckNumber'

    },
    {
        Header: 'station',
        accessor: 'station'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },

    {
        Header: 'Expiring Date',
        accessor: 'validationDuration'
    },
    {
        Header: 'Status',
        accessor: 'status'

    }

]



export const    RegisteredTankColumn = [
    {
        Header: 'Tank Number',
        accessor: 'truckNumber'
    },
    {
        Header: 'Station',
        accessor: 'station'

    },
    {
        Header: 'Capacity',
        accessor: 'capacity'
    },
    {
        Header: 'Calibration Date',
        accessor: 'calibrationDate'
    },
    {
        Header: 'Status',
        accessor: 'status'
    }

]


export const    BlacklistColumn = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Truck Number',
        accessor: 'truck'
    },
    {
        Header: 'Transporter',
        accessor: 'transporter'

    },
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Recommendation Officer',
        accessor: 'officer'
    },
    {
        Header: 'View',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard/product/blacklist${value}`}>View</Link>

    }

]



export const    TruckReportColumn = [
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Plate Number',
        accessor: 'truckNumber'
    },
    
    
    {
        Header: 'Transporter',
        accessor: 'transporter'
    },
    {
        Header: 'From',
        accessor: 'from'
    },
    {
        Header: 'Delivered To',
        accessor: 'delivered'
    },
    {
        Header: 'Product',
        accessor: 'product'
    }
    ,
    {
        Header: 'Product Check',
        accessor: 'productCheck'
    }

]

export const  QualityCheckColumn = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Truck Number',
        accessor: 'plateNumber'
    },
    
    
    {
        Header: 'Transporter',
        accessor: 'transporter'
    },
    {
        Header: 'Deliveries',
        accessor: 'deliveries'
    },
    {
        Header: 'Quality Checks',
        accessor: 'qualityChecks'
    },
    {
        Header: 'Positive Reviews',
        accessor: 'positiveReview'
    }
    ,
    {
        Header: 'Negative Reviews',
        accessor: 'negativeReview'
    },
    
    {
        Header: 'View',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard/product/${value}`}>View</Link>

    }

]

export const  TruckInspectionColumn = [
  
    {
        Header: 'Truck Number',
        accessor: 'truckNumber'
    },
    
    
    {
        Header: 'Transporter',
        accessor: 'transporter'
    },
    {
        Header: 'Number of Compliance',
        accessor: 'numberofcompliance'
    },
    {
        Header: 'Number of Non Compliance',
        accessor: 'numberofnoncompliance'
    },
    {
        Header: ' Records',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard/product/${value}`}>View Record</Link>

    }
 
   
]

export const  TruckInspectionListColumn = [
    {
        Header: 'Date',
        accessor: 'date'
    },
    {
        Header: 'Truck Number',
        accessor: 'truckNumber'

    },
    
    
    {
        Header: 'Transporter',
        accessor: 'transporter'
    },
   
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Inspection Reports',
        accessor: 'link',
  Cell: ({ cell: { value }, row: { original } }) => <Link to={`/dashboard/product/inspection/survey/${value}`}>View Report</Link>

    }
]

export const    ShortageInfoColumn = [
    {
        Header: 'truck Number',
        accessor: 'truckNumber'
    },
    {
        Header: 'transporter',
        accessor: 'transporter.transporter'

    },
    {
        Header: 'Volume dispatched',
        accessor: 'volumeDispatched'
    },
    {
        Header: 'Liquid Height Shortage(LHS)',
        accessor: 'liquidHeight'
    },
    {
        Header: 'ust shortage',
        accessor: 'ustStrorage'
    },
    {
        Header: 'actual shortage',
        accessor: 'actualStorage'
    }

]



// 
