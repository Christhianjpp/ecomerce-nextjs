"use client"
import { ChangeEvent, useState } from 'react';
import * as XLSX from 'xlsx';
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Label } from '../ui/label';
import { CreateAllProducts } from '@/libs/products/actions';


const AddProductosXTS = () => {
    const [excelData, setExcelData] = useState<any[] | null>(null);
    const [headerRow, setHeaderRow] = useState<string[] | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

                if (jsonData.length > 0) {
                    // Tomar la primera fila como nombres de propiedades
                    const headers = jsonData[0] as string[];
                    setHeaderRow(headers);

                    // Transformar los datos omitiendo la primera fila (nombres de propiedades)
                    const transformedData = jsonData.slice(1).map((row: any) => {
                        const rowData: Record<string, any> = {};
                        headers.forEach((header, index) => {
                            rowData[header] = row[index];
                        });
                        return rowData;
                    });

                    setExcelData(transformedData);
                }
            };

            reader.readAsArrayBuffer(file);
        }
    }
    const onSubmit = async () => {

        if (!excelData) return
        // Transformar el arreglo original en el formato deseado
        const data = excelData.map((item) => ({
            codeReferenceFactory: item.codigoReferenciaFabrica,
            codeReference: item.codigoReferencia,
            categoryId: item.categoria,
            subcategoryId: item.subcategoria,
            description: item.descripcion,
            materialId: item.material,
            name: 'Producto',


        }));
        console.log(data)
        CreateAllProducts(data)
        // const resp = await ecomerceApi.post('/product/xlsx', data)
        // console.log(resp)

    }
    return (
        <div>
            <div className="space-y-2 mb-8" >
                <Label htmlFor="archivo">Nombre</Label>
                <Input id="archivo" type="file" accept='.xlsx, xls' placeholder="" onChange={handleChange} />
            </div>
            <div className="space-y-2 mb-8" >
                <Button onClick={onSubmit} > Crear</Button>
            </div>


            {/* <pre>{JSON.stringify(excelData, null, 2)}</pre> */}
            {excelData && (
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            {headerRow?.map((header, index) => (
                                <TableHead key={index}>{header}</TableHead>
                            ))}

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {excelData.map((invoice) => (
                            <TableRow key={invoice.invoice}>
                                {
                                    headerRow?.map((header, index) => (
                                        <TableCell key={index}>{invoice[header]}</TableCell>
                                    ))
                                }

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}

export default AddProductosXTS