// function hook => useState
import React from 'react'
import propTypes from 'prop-types'
import "./index.scss";


export default function Number(props) {

    // destructor yang akan dipakai
    const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural} = props;

    // saat pertama kali running function ini, ada 3 value => prefix, value, suffix
    // klo running useState bisa di destructor , jadi dia bakal ngemabliin nilai
    // inputValue dan setInputValue
    
    const onChange = e => {
        // vaariablenya dibuat string dulu agar bisa diolah si stringnya untuk bisa mengahpus
        // semau prefix dan semua suffix 
        let value = String(e.target.value);
        
        // ngecek jika valuenya bukan emptyString, 0, null, undefined
        // replace ini salah satu function untuk pengolahan string, jadi jika dia menemukan string
        // yang isinya prefix, si valuenya itu bakal dihapus 
        // if(prefix) value = value.replace(prefix);
        // if(suffix) value = value.replace(suffix);

        // input number - cuma nerima dari 0-9 dan dicek semua valuenya "simbolnya *"
        // const patternNumeric = new RegExp("[0-9]*");

        // pastikan nilai isNumeric ini bentuknya boolean, function untuk eksekusi dari pattern yg kita mau
        // const isNumeric = patternNumeric.test(value);
        
        // fungsi untuk set input value & pengkondisian untuk min dan max value yang diinput
        if (+value <= max && +value >= min){
            // funsi untuk update state komponen yang manggil ini + untuk proses selanjutnya
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            });
        }
    }

    // minus ngecek kalau valuenya harus lebih dari minimal
    const minus = () => {
        value > min &&
            onChange ({
                target: {
                    name: name,
                    value: +value - 1
                }
            });
    }

    // plus ngecek kalau valuenya harus kurang dari minimal
    const plus = () => {
        value < max &&
            onChange ({
                target: {
                    name: name,
                    value: +value + 1
                }
            });
    }

    return (
        // class name nerima props namanya outerClassName lalu digabungin dengan pemisah spasi
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    {/* ketik click yang onClick, itu akan ngerunning fungsi plus dan minus  */}
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                {/* pharsing value yg sudah lewatin props  */}
                <input
                    min={min}
                    max={max}
                    name={name}
                    className="form-control"
                    
                    // cek ga undifined,null, 0 dia akan muncurin placeholder, kalau tidak 0
                    placeholder={ placeholder ? placeholder : "0"}
                    
                    // valuenya dari state local
                    value= {`${prefix}${value}${suffix}${
                        isSuffixPlural && value > 1 ? "s" : ""
                      }`}
                    
                    // merubah ngerubah input menggunakan function onChange
                    onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}

Number.defaultProps = {
    // value minimal di set 1 - klo ga diinput
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
};

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
};