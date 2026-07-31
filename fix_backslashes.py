import sys

with open(sys.argv[1], 'rb') as f:
    data = f.read()

# Replace 3 backslashes (5c5c5c0a) at end of snippet lines with 2 backslashes (5c5c0a)
# In the TS file: `... \\\<newline>` becomes `... \\<newline>`
old = bytes([0x5c, 0x5c, 0x5c, 0x0a])
new = bytes([0x5c, 0x5c, 0x0a])

data = data.replace(old, new)

with open(sys.argv[1], 'wb') as f:
    f.write(data)

print("Done")
