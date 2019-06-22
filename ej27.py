# Day 27: Testing

def minimum_index(seq):
    if len(seq) == 0:
        raise ValueError("Cannot get the minimum value index from an empty sequence")
    min_idx = 0
    for i in range(1, len(seq)):
        if seq[i] < seq[min_idx]:
            min_idx = i
    return min_idx


class TestDataEmptyArray(object):

    @staticmethod
    def get_array():
        # This method has to return an empty array
        return []


class TestDataUniqueValues(object):

    @staticmethod
    def get_array():
        # Returns an array of size at least 2 with all unique elements
        return [1, 2, 3, 4, 5, 6]

    @staticmethod
    def get_expected_result():
        # Returns the expected minimum value index for this array
        return 0


class TestDataExactlyTwoDifferentMinimums(object):

    @staticmethod
    def get_array():
        # Returns an array where there are exactly two different minimum values.
        return [2, 3, 4, 1, 1, 5]

    @staticmethod
    def get_expected_result():
        # Returns the expected minimum value index for this array
        return 3


def TestWithEmptyArray():
    try:
        seq = TestDataEmptyArray.get_array()
        result = minimum_index(seq)
    except ValueError as e:
        pass
    else:
        assert False


def TestWithUniqueValues():
    seq = TestDataUniqueValues.get_array()
    assert len(seq) >= 2

    assert len(list(set(seq))) == len(seq)

    expected_result = TestDataUniqueValues.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result


def TestiWithExactyTwoDifferentMinimums():
    seq = TestDataExactlyTwoDifferentMinimums.get_array()
    assert len(seq) >= 2
    tmp = sorted(seq)
    assert tmp[0] == tmp[1] and (len(tmp) == 2 or tmp[1] < tmp[2])

    expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result()
    result = minimum_index(seq)
    assert result == expected_result

TestWithEmptyArray()
TestWithUniqueValues()
TestiWithExactyTwoDifferentMinimums()
print("OK")
