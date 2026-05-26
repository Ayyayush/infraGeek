/**
 * ! SORT COMMAND IN LINUX
 *
 * maan lo ls kiya kuch output aaya
 * ab maan lo text aaya
 * ab hum isko sorted tareeke mein dekhna chahte hain
 * toh sort command use karenge
 *
 *
 * less foods.txt
 *
 * sort foods.txt
 *
 * - file ka content sorted order mein display hoga
 *
 *
 * ! REVERSE SORTING
 *
 * sort -r foods.txt
 *
 * - reverse order mein sort karega
 *
 *
 * ! SORTING NUMBERS
 *
 * ek aur file create ki:
 *
 * nano number.txt
 *
 * isme numbers daal diye:
 *
 * 09
 * 10
 * 009
 * 100
 * 200
 * 02
 *
 *
 * ab normally sort karenge toh:
 *
 * sort number.txt
 *
 * - ye character/alphabetical basis pe sort karega
 * - pehle 0 se start hone wale numbers aayenge
 *
 *
 * ! NUMERIC SORT
 *
 * sort -n number.txt
 *
 * - ab ye samajh jayega ki ye numbers hain
 * - numeric sorting karega
 *
 *
 * ! SORTING WITH FILE SIZE
 *
 * ls -lh
 *
 * - files ka size human readable format mein show hota hai
 *
 *
 * sort command normally characters ke basis pe sort karta hai
 *
 * man sort karo aur options dekho
 *
 * "sort via key" option dikhega
 *
 *
 * ! SORTING ALONG COLUMNS
 *
 * sort -k
 *
 * -k location/column accept karta hai
 *
 *
 * Example:
 *
 * ls -lh | sort -k5h
 *
 * - 5th column ke basis pe sorting karega
 * - h means human readable numeric sort
 *
 *
 * ! UNIQUE SORTING
 *
 * nano fruits.txt
 *
 * apple
 * apple
 * banana
 * kiwi
 *
 *
 * sort fruits.txt
 *
 * - normal sorted output dega
 *
 *
 * sort -u fruits.txt
 *
 * - sirf unique values dega
 * - duplicate remove ho jayenge
 *
 *
 * ! IMPORTANT NOTES
 *
 * sort
 * - alphabetical sorting
 *
 * sort -r
 * - reverse sorting
 *
 * sort -n
 * - numeric sorting
 *
 * sort -u
 * - unique sorting
 *
 * sort -k
 * - specific column/key based sorting
 *
 *
 * ! SUMMARY OF THIS LECTURE
 *
 * Commands learned:
 *
 * sort foods.txt
 * sort -r foods.txt
 * sort -n number.txt
 * ls -lh | sort -k5h
 * sort -u fruits.txt
 *
 *
 * Concepts learned:
 * - alphabetical sorting
 * - reverse sorting
 * - numeric sorting
 * - column based sorting
 * - unique filtering
 *
 */