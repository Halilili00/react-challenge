import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        backgroundColor: "#ECECEC",
        width: '100%',
        height: '40%',
        borderColor: '#C0C0C0',
        border: '1px solid',
        borderRadius: '5px',
    },
    btn: {
        background: "#ffffff",
    },
    input: {
        backgroundColor: "#ffffff"
    },
    userInputTable: {
        marginTop:'25px'
      },
    tableHeader: {
        backgroundColor: '#ECECEC',
    },
    detailTable: {
        width: '350px'
    },
    detailBox: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ECECEC',
        border: '2px solid #000',
        p: 4,
    }
})

export default useStyles;