import React, { useState } from "react";

const SelectOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSelection = (e) => {
    const options = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );
    setSelectedOptions([...selectedOptions, ...options]);
  };

  const removeOption = (optionToRemove) => {
    const updatedOptions = selectedOptions.filter(
      (option) => option !== optionToRemove,
    );
    setSelectedOptions(updatedOptions);
  };

  const computerScienceOptions = [
    { value: "cs1", label: "コンピュータサイエンス 1" },
    { value: "cs2", label: "コンピュータサイエンス 2" },
    { value: "cs3", label: "コンピュータサイエンス 3" },
  ];

  const softwareEngineeringOptions = [
    { value: "se1", label: "ソフトウェアエンジニアリング 1" },
    { value: "se2", label: "ソフトウェアエンジニアリング 2" },
    { value: "se3", label: "ソフトウェアエンジニアリング 3" },
  ];

  let optionsToShow = [];
  if (selectedGenre === "computerScience") {
    optionsToShow = computerScienceOptions;
  } else if (selectedGenre === "softwareEngineering") {
    optionsToShow = softwareEngineeringOptions;
  }

  return (
    <div>
      <h2>ジャンルを選んでください:</h2>
      <select onChange={handleGenreChange}>
        <option value="">ジャンルを選択してください</option>
        <option value="computerScience">コンピュータサイエンス</option>
        <option value="softwareEngineering">
          ソフトウェアエンジニアリング
        </option>
      </select>

      {selectedGenre && (
        <div>
          <h2>選択肢を選んでください:</h2>
          <select multiple onChange={handleSelection}>
            {optionsToShow.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {selectedOptions.length > 0 && (
            <div>
              <h3>選択された選択肢:</h3>
              <ul>
                {selectedOptions.map((option) => (
                  <li key={option}>
                    {option}
                    <button onClick={() => removeOption(option)}>削除</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SelectOptions;
