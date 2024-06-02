import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';


function LastTransactions({ lastTransactions }) {
    return (
        <div>
            <SimpleTreeView>
                {
                    lastTransactions.map((transaction, index) => {
                        return <TreeItem itemId={index.toString()} key={index} label={transaction.transactionType == 'debit' ?  'חיוב קיוסק ' : ':הוספה ' + transaction.category } >
                            <TreeItem itemId={index.toString() + '1'} label={"מאת: הרב " + transaction.performedByName} />
                            <TreeItem itemId={index.toString() + '2'} label={"מספר נקודות: " + transaction.pointsAmount} />
                            <TreeItem itemId={index.toString() + '3'} label={"מאזן אחרי הפעולה: " + transaction.balanceAfterTransaction} />
                            <TreeItem itemId={index.toString() + '4'} label={"תאריך: " + new Date(transaction.transactionDate).toLocaleDateString()} />

                        </TreeItem>

                    })
                }
            </SimpleTreeView>
        </div>
    )
}

export default LastTransactions