# Longest Substring Without Repeating Characters
# Full problem: see ../README.md Part 3
# Run: python3 solution.py

def length_of_longest_substring(s) -> int:
    saw = {}
    last = 0
    longest = 0

    for next in range(len(s)):
        letter = s[next]

        if letter in saw:
            last = max(last, saw[letter] + 1)

        saw[letter] = next
        longest = max(longest, next - last + 1)

    return longest
    
    pass

print(length_of_longest_substring("abcabcbb"))  # 3
print(length_of_longest_substring("bbbbb"))     # 1
print(length_of_longest_substring("pwwkew"))    # 3